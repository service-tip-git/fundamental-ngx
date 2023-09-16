import { AfterContentInit, ChangeDetectorRef, ContentChild, ContentChildren, Directive, ElementRef, forwardRef, HostBinding, inject, Input, OnDestroy, Optional, QueryList } from '@angular/core';
import { forkJoin, of, startWith, Subscription, switchMap, tap } from 'rxjs';

import { NestedListStateService } from '../nested-list-state.service';
import { NestedItemDirective } from '../nested-item/nested-item.directive';
import { NestedItemService } from '../nested-item/nested-item.service';
import { NestedListKeyboardService } from '../nested-list-keyboard.service';
import { NestedListInterface } from './nested-list.interface';
import { NestedListHeaderDirective } from '../nested-list-directives';
import { Nullable } from '@fundamental-ngx/cdk/utils';
import { provideDefaultTranslations, TranslationService } from '@fundamental-ngx/i18n';
import { ContentDensityObserver, contentDensityObserverProviders } from '@fundamental-ngx/core/content-density';
import { map } from "rxjs/operators";

@Directive({
    selector: '[fdNestedList], [fd-nested-list]',
    providers: [
        contentDensityObserverProviders(),
        provideDefaultTranslations(() => import('../i18n').then((m) => m.i18n))
    ]
})
export class NestedListDirective implements AfterContentInit, NestedListInterface, OnDestroy {
    /** In case the user wants to no use icons for items in this list */
    @Input()
    @HostBinding('class.fd-nested-list--text-only')
    textOnly = false;

    /** Aria defines role description for the Nested List Tree. */
    @Input()
    ariaRoledescriptionTree = 'Navigation List Tree';

    /** Aria defines role description for the Nested List MenuBar. */
    @Input()
    ariaRoledescriptionMenuBar = 'Navigation List Menu Bar';

    /** Aria defines aria label for the selected item when the list with disabled selection. */
    @Input()
    ariaLabelSelected = 'Selected';

    /** @hidden */
    @HostBinding('class.fd-nested-list')
    fdNestedListItemClass = true;

    /** @hidden */
    @HostBinding('attr.aria-hidden')
    hidden = false;

    /**
     * @hidden
     * This variable is mostly to keep track of this list's children. There is not usage of it inside this directive,
     * but it's used by services and NestedItemDirective by itself,
     */
    @ContentChildren(forwardRef(() => NestedItemDirective))
    nestedItems: QueryList<NestedItemDirective>;

    /** @hidden */
    @ContentChild(NestedListHeaderDirective)
    private _nestedListHeader: NestedListHeaderDirective;

    /** @hidden */
    private _subscriptions = new Subscription();

    /** @hidden */
    @HostBinding('attr.role')
    private _role = 'tree';

    /** @hidden */
    @HostBinding('attr.aria-roledescription')
    private _ariaRoledescription: Nullable<string> = this.ariaRoledescriptionTree;

    /** @hidden */
    @HostBinding('attr.aria-haspopup')
    private _ariaHaspopup: Nullable<string> = null;

    /** @hidden */
    @HostBinding('attr.tabindex')
    private _tabindex = '-1';

    /** @hidden */
    private _translationService = inject(TranslationService);

    /** @hidden */
    constructor(
        @Optional() private _nestedItemService: NestedItemService,
        private _nestedListStateService: NestedListStateService,
        private _nestedListKeyboardService: NestedListKeyboardService,
        private _elementRef: ElementRef,
        private _changeDetectionRef: ChangeDetectorRef,
        private _contentDensityObserver: ContentDensityObserver
    ) {
        if (this._nestedItemService) {
            this._nestedItemService.list = this;
        }
        _contentDensityObserver.subscribe();
    }

    /** @hidden */
    ngOnDestroy(): void {
        this._subscriptions.unsubscribe();
    }

    /** @hidden */
    ngAfterContentInit(): void {
        let nestedLevel: number = this._getNestedLevel();
        /** If there is condensed mode, maximum 2nd level class of nest can be added */
        if (this._nestedListStateService.condensed) {
            nestedLevel = Math.min(...[nestedLevel, 2]);
        }

        this._setAccessibilityProperties(nestedLevel);

        const sub = this.nestedItems.changes.pipe(
            startWith(this.nestedItems),
            tap(() => this._nestedListKeyboardService.refresh$.next()),
            map((nestedItems) => nestedItems.toArray()),
            switchMap((nestedItems: NestedItemDirective[]) => {
                return forkJoin(nestedItems.map((item, i) => {
                    item._ariaLevel = nestedLevel;
                    if (!item.linkItem) {
                        return of(null);
                    } else {
                        item.linkItem.ariaDescribedby = this._nestedListHeader?.id || null;
                        return this._translationService.translate$('coreNestedList.linkItemAriaLabel', {
                            itemDetails: item.linkItem.getTitle(),
                            index: i + 1,
                            total: this.nestedItems.length,
                            selectedDescription:
                                !this._nestedListStateService.selectable && item.linkItem.selected
                                    ? ', ' + this.ariaLabelSelected
                                    : ''
                        }).pipe(
                            tap(ariaLabel => item.linkItem._ariaLabel = ariaLabel)
                        );
                    }
                }));
            }),
            tap(() => this._changeDetectionRef.detectChanges())
        ).subscribe();

        this._subscriptions.add(sub);

        this._handleNestedLevel(nestedLevel);
    }

    /** @hidden */
    detectChanges(): void {
        this._changeDetectionRef.markForCheck();
    }

    /** @hidden */
    private _handleNestedLevel(level: number): void {
        /** Adding class with the nested level */
        this._elementRef.nativeElement.classList.add('level-' + level);
    }

    /**
     * @hidden
     * Method, that checks how deep is the list element
     */
    private _getNestedLevel(): number {
        let element = this._elementRef.nativeElement;
        const parentElements: Element[] = [];

        /** Method that gathers all of the parentNode elements of current NestedListDirective element */
        while (element.parentNode) {
            parentElements.unshift(element);
            element = element.parentNode;
        }

        /** Filter only elements, that has `fd-nested-list` directive attribute */
        const filteredParentElements = parentElements.filter((_element) => _element.hasAttribute('fd-nested-list'));
        return filteredParentElements.length;
    }

    /** @hidden */
    private _setAccessibilityProperties(level: number): void {
        if (this._nestedListStateService.condensed && level === 1) {
            this._ariaRoledescription = this.ariaRoledescriptionMenuBar;
        }

        if (level > 1 || (this._nestedItemService?.popover && !this._nestedListStateService.condensed)) {
            this._role = 'group';
            this._ariaRoledescription = null;
        }

        if (this._nestedItemService?.popover) {
            this._ariaHaspopup = 'tree';
        }
    }
}
