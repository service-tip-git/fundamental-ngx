import { NgTemplateOutlet } from '@angular/common';
import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    Input,
    Renderer2,
    ViewEncapsulation
} from '@angular/core';
import { Nullable } from '@fundamental-ngx/cdk/utils';
import { FormLabelComponent } from '@fundamental-ngx/core/form';
import { HeadingLevel } from '@fundamental-ngx/core/shared';
import { TitleComponent } from '@fundamental-ngx/core/title';
import { FACET_CLASS_NAME, FacetType } from '../constants';
import { addClassNameToFacetElement } from '../utils';

let randomId = 0;
let randomTitleId = 0;

@Component({
    selector: 'fd-facet',
    templateUrl: './facet.component.html',
    styleUrl: './facet.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    host: {
        '[class.fd-facet]': 'true'
    },
    imports: [NgTemplateOutlet, TitleComponent, FormLabelComponent]
})
export class FacetComponent implements AfterViewInit {
    /** the type of Facet: form, key-value, image, rating-indicator */
    @Input()
    type: FacetType;

    /** The facet title.
     * For eg: for key-value facet, facetTitle is the key and the underlying object status or object number
     * component is the value.
     */
    @Input()
    facetTitle: string;

    /** An optional subtitle to display in the rating-indicator facet */
    @Input()
    subtitle: string;

    /**
     * Heading level of the facet title.
     */
    @Input()
    set headingLevel(level: Nullable<HeadingLevel>) {
        if (typeof level === 'number') {
            this._headingLevel = level;
        } else if (typeof level === 'string') {
            this._headingLevel = Number.parseInt(level.replace(/\D/g, ''), 10);
        }
    }

    /**
     * id for the facet
     */
    @Input()
    @HostBinding('attr.role')
    id = `fd-facet-id-${randomId++}`;

    /**
     * property that allows the facet to be aligned to the end of the facet group, right-aligned.
     */
    @Input()
    alignEnd = false;

    /** @hidden
     * the appropriate role for each facet type
     */
    @HostBinding('attr.role')
    get role(): string {
        return this.type !== 'image' ? 'group' : '';
    }

    /** @hidden
     * the appropriate aria-labelledby to associate with the role
     */
    @HostBinding('attr.aria-labelledby')
    get ariaLabelledby(): string {
        return this.type !== 'image' ? this.titleId : '';
    }

    /** @hidden */
    _headingLevel: number;

    /** @hidden
     * the internal id for the title to be associated with the aria-labelledby
     */
    titleId = `fd-facet-title-id-${randomTitleId++}`;

    /** @hidden */
    constructor(
        public readonly elementRef: ElementRef<HTMLElement>,
        private _renderer: Renderer2
    ) {}

    /** @hidden */
    ngAfterViewInit(): void {
        this._setupAdditionalStyles();
        this._addAlignmentModifier();
    }

    /**
     * @hidden
     * set up common styles and specific styles based on each facet type
     */
    private _setupAdditionalStyles(): void {
        if (!this.type) {
            return;
        }
        // add type modifier class to host
        this.elementRef.nativeElement.classList.add(`fd-facet--${this.type}`);

        // add margin end and bottom spacings
        this.elementRef.nativeElement.classList.add(`fd-margin-end--md`);
        if (this.type !== 'image') {
            // add bottom margin to non-image facets
            this.elementRef.nativeElement.classList.add(`fd-margin-bottom--sm`);
        }

        switch (this.type) {
            case 'image':
                // image should always be on the left
                this._setStyleToHostElement('order', '-1');
                break;
            case 'rating-indicator': {
                const ratingIndicatorComponent = this.elementRef.nativeElement.querySelector('.fd-rating-indicator');

                if (!ratingIndicatorComponent) {
                    return;
                }
                this._addClassNameToCustomElement(ratingIndicatorComponent, FACET_CLASS_NAME.facetContainer);
                const ratingIndicatorContainer = ratingIndicatorComponent.querySelector(
                    '.fd-rating-indicator__container'
                );
                if (!ratingIndicatorContainer) {
                    return;
                }
                this._addClassNameToCustomElement(
                    ratingIndicatorContainer,
                    FACET_CLASS_NAME.facetRatingIndicatorContainer
                );

                const ratingIndicatorDynamicText = ratingIndicatorComponent.querySelector(
                    '.fd-rating-indicator__dynamic-text'
                );
                if (!ratingIndicatorDynamicText) {
                    return;
                }
                this._addClassNameToCustomElement(
                    ratingIndicatorDynamicText,
                    FACET_CLASS_NAME.facetRatingIndicatorDynamicText
                );
                this._addClassNameToCustomElement(ratingIndicatorDynamicText, FACET_CLASS_NAME.marginTopTiny);
                break;
            }
            case 'form': {
                const formFacetContainer = this.elementRef.nativeElement.querySelectorAll('.fd-facet__container');
                if (!formFacetContainer) {
                    return;
                }
                formFacetContainer.forEach((container, index) => {
                    if (index !== formFacetContainer.length - 1) {
                        this._addClassNameToCustomElement(container, FACET_CLASS_NAME.marginBottomTiny);
                    }
                    // if icon+link is presented, add spacing to the icon
                    const iconComponent = container.querySelector('fd-icon');
                    if (!iconComponent) {
                        return;
                    }
                    this._addClassNameToCustomElement(iconComponent, FACET_CLASS_NAME.marginEndTiny);
                });

                break;
            }
            case 'key-value': {
                // add class to object status
                const objectStatusComponent = this.elementRef.nativeElement.querySelector('.fd-object-status');
                if (!objectStatusComponent) {
                    return;
                }
                this._addClassNameToCustomElement(objectStatusComponent, FACET_CLASS_NAME.facetObjectStatus);

                // add class to override font-family value
                const objectStatusText = objectStatusComponent.querySelector('.fd-object-status__text');
                if (!objectStatusText) {
                    return;
                }
                this._addClassNameToCustomElement(objectStatusText, FACET_CLASS_NAME.facetObjectStatusText);

                // add spacing to object status icon, if present
                const objectStatusIcon = objectStatusComponent.querySelector('.fd-object-status__icon');
                if (!objectStatusIcon) {
                    return;
                }
                this._addClassNameToCustomElement(objectStatusIcon, FACET_CLASS_NAME.paddingNone);
                this._addClassNameToCustomElement(objectStatusIcon, FACET_CLASS_NAME.marginEndTiny);
                break;
            }
            default:
                break;
        }
    }

    /** @hidden
     * adds the logic for `alignEnd` modifier
     */
    private _addAlignmentModifier(): void {
        if (!this.alignEnd) {
            return;
        }
        addClassNameToFacetElement(this._renderer, this.elementRef.nativeElement, 'fd-facet-align-end');

        // add margins to the left after removing existing right margin
        this.elementRef.nativeElement.classList.remove(`fd-margin-end--md`);
        this.elementRef.nativeElement.classList.add(`fd-margin-begin--md`);
    }

    /** @hidden */
    private _setStyleToHostElement(attribute: string, value: any): void {
        this._renderer.setStyle(this.elementRef.nativeElement, attribute, value);
    }

    /** @hidden */
    private _addClassNameToCustomElement(element: Element, className: string): void {
        addClassNameToFacetElement(this._renderer, element, className);
    }
}
