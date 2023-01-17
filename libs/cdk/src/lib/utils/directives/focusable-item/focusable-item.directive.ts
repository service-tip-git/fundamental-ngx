import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { BehaviorSubject, filter, first } from 'rxjs';
import { FDK_FOCUSABLE_ITEM_DIRECTIVE } from './focusable-item.tokens';
import { FocusableItemViewModifier } from './focusable-item-view-modifier.interface';
import { setFocusable } from './set-focusable';
import { FocusableObserver } from './focusable.observer';
import { takeUntil, tap } from 'rxjs/operators';
import { DestroyedService } from '../../services';
import { HasElementRef } from '../../interfaces';
import {
    DeprecatedSelector,
    FD_DEPRECATED_DIRECTIVE_SELECTOR,
    getDeprecatedModel
} from '../../deprecated-selector.class';

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[fnFocusableItem]',
    standalone: true,
    providers: [
        {
            provide: FD_DEPRECATED_DIRECTIVE_SELECTOR,
            useValue: getDeprecatedModel('[fdkFocusableItem]', '[fnFocusableItem]')
        }
    ]
})
export class DeprecatedFocusableItemDirective extends DeprecatedSelector {}

@Directive({
    selector: '[fdkFocusableItem]',
    standalone: true,
    providers: [
        {
            provide: FDK_FOCUSABLE_ITEM_DIRECTIVE,
            useExisting: FocusableItemDirective
        },
        DestroyedService
    ]
})
export class FocusableItemDirective implements HasElementRef, AfterViewInit, FocusableItemViewModifier {
    /** Whether the item is focusable. */
    @Input()
    set fdkFocusableItem(val: BooleanInput) {
        this._viewInit$.pipe(filter(Boolean), first()).subscribe(() => this.setFocusable(coerceBooleanProperty(val)));
    }

    get fdkFocusableItem(): boolean {
        return this._focusable;
    }

    /** @hidden */
    private _focusable = true;
    /** @hidden */
    private readonly _viewInit$ = new BehaviorSubject(false);

    /** @hidden */
    constructor(
        private _elementRef: ElementRef<HTMLElement>,
        private _focusableObserver: FocusableObserver,
        private _destroy$: DestroyedService
    ) {
        // Focusable by default
        this.setFocusable(true);

        this._focusableObserver
            .observe(this._elementRef)
            .pipe(
                tap((isFocusable) => {
                    if (isFocusable !== this._focusable) {
                        this.setFocusable(isFocusable);
                        this._focusable = isFocusable;
                    }
                }),
                takeUntil(this._destroy$)
            )
            .subscribe();
    }

    /** @hidden */
    ngAfterViewInit(): void {
        this._viewInit$.next(true);
    }

    /** Sets focusable state of the element. */
    setFocusable = (isFocusable: boolean): void => {
        setFocusable(this, isFocusable);
    };

    /** Element reference. */
    elementRef(): ElementRef<HTMLElement> {
        return this._elementRef;
    }
}
