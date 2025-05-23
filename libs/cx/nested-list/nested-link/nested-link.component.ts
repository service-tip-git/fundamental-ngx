import { NgTemplateOutlet } from '@angular/common';
import {
    ChangeDetectorRef,
    Component,
    ContentChild,
    ElementRef,
    EventEmitter,
    HostBinding,
    HostListener,
    Input,
    Output,
    Renderer2
} from '@angular/core';
import { Nullable } from '@fundamental-ngx/cdk/utils';
import { NestedItemService } from '../nested-item/nested-item.service';
import {
    NestedListButtonDirective,
    NestedListExpandIconComponent,
    NestedListTitleDirective
} from '../nested-list-directives';

@Component({
    template: `
        @if (!_nestedListButton) {
            <div class="fdx-nested-list__link-container">
                <ng-template [ngTemplateOutlet]="containerContent"></ng-template>
            </div>
        }
        @if (_nestedListButton) {
            <a tabindex="0" class="fdx-nested-list__link-container">
                <ng-template [ngTemplateOutlet]="containerContent"></ng-template>
            </a>
        }
        <ng-content select="[fdx-nested-list-button]"></ng-content>
        <ng-template #containerContent>
            <ng-content select="[fdx-nested-list-icon]"></ng-content>
            <ng-content select="[fdx-nested-list-title]"></ng-content>
            <ng-content select="[fdx-nested-list-expand-icon]"></ng-content>
        </ng-template>
    `,
    imports: [NgTemplateOutlet],
    standalone: true,
    selector:
        // eslint-disable-next-line @angular-eslint/component-selector
        '[fdx-nested-list-link], button[fdx-nested-list-link], a[fdx-nested-list-link], div[fdx-nested-list-link]',
    host: {
        '[attr.tabindex]': '!_nestedListButton ? 0 : -1'
    }
})
export class NestedLinkComponent {
    /** Function that is called on click event dispatch on this element. */
    @Input()
    onClickCallback: () => void;

    /** Whether this element is selected*/
    @Input()
    @HostBinding('attr.aria-selected')
    @HostBinding('class.is-selected')
    selected = false;

    /** @hidden */
    @HostBinding('attr.aria-label')
    _ariaLabel: string;

    /** @hidden */
    @Input()
    @HostBinding('attr.aria-describedby')
    ariaDescribedby: Nullable<string | number>;

    /** Event thrown, when selected state is changed */
    @Output()
    selectedChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    /** @hidden */
    @HostBinding('class.fdx-nested-list__link')
    cxNestedListItemClass = true;

    /** @hidden */
    @HostBinding('attr.role')
    role = 'treeitem';

    /**
     *  @hidden
     *  Reference to title element, it is used, to get title for condensed mode.
     */
    @ContentChild(NestedListTitleDirective)
    title: NestedListTitleDirective;

    /** @hidden */
    @ContentChild(NestedListButtonDirective)
    _nestedListButton: NestedListButtonDirective;

    /** @hidden */
    @ContentChild(NestedListExpandIconComponent)
    _expandIcon: NestedListExpandIconComponent;

    /** @hidden */
    constructor(
        public changeDetRef: ChangeDetectorRef,
        private _renderer: Renderer2,
        private _elementRef: ElementRef,
        private _itemService: NestedItemService
    ) {}

    /** @hidden */
    get elementRef(): ElementRef<HTMLElement> {
        return this._elementRef;
    }

    /** Handler for keyboard events */
    @HostListener('keydown', ['$event'])
    onKeyDown(event: KeyboardEvent): void {
        this._itemService.keyDown.next(event);
    }

    /** Handler for mouse events */
    @HostListener('click')
    onClick(): void {
        if (this._collapseOnly) {
            this._expandIcon.onClick();
        } else {
            this._itemService.click.next();
            if (this.onClickCallback) {
                this.onClickCallback();
            }
        }
    }

    /** Handler for focus events */
    @HostListener('focus')
    onFocus(): void {
        this._itemService.focus.next();
    }

    /** Method to trigger selected state change */
    changeSelected(selected: boolean): void {
        this.selected = selected;
        this.selectedChange.emit(selected);
    }

    /** Set focus on the element. */
    focus(): void {
        this._elementRef.nativeElement.focus();
    }

    /** Dispatches the click event on the element */
    click(): void {
        this._elementRef.nativeElement.click();
    }

    /** Returns the title value of the title directive */
    getTitle(): string {
        return this.title && this.title.getInnerText();
    }

    /** @hidden */
    private get _collapseOnly(): boolean {
        return !this._nestedListButton && this._expandIcon;
    }
}
