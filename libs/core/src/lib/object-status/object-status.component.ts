import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    Input,
    OnChanges,
    ViewEncapsulation,
    OnInit,
    AfterViewInit,
    Renderer2,
    ViewChild
} from '@angular/core';
import { applyCssClass, CssClassBuilder } from '../utils/public_api';

export type ObjectStatus = 'negative' | 'critical' | 'positive' | 'informative';

@Component({
    // tslint:disable-next-line:component-selector
    selector: '[fd-object-status]',
    template: `<ng-content></ng-content>`,
    styleUrls: ['./object-status.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObjectStatusComponent implements OnChanges, OnInit, CssClassBuilder, AfterViewInit {
    /** User's custom classes */
    @Input()
    class: string;

    /**
     * The status represented by the Object Status.
     * Can be one of the following: 'negative' | 'critical' | 'positive' | 'informative'
     * For default Object Status omit this property
     */
    @Input()
    status: ObjectStatus;

    /**
     * Glyph (icon) of the Object Status.
     */
    @Input()
    glyph: string;

    /**
     * A number representing the indication color.
     * Option includes numbers from 1 to 8
     */
    @Input()
    indicationColor: number = null;

    /** Whether the Object Status is clickable. */
    @Input()
    clickable = false;

    /** Whether the Object Status is inverted. */
    @Input()
    inverted = false;

    /** Whether the Object Status is in Large Design. */
    @Input()
    large = false;

    /** @hidden */
    constructor(private _elementRef: ElementRef, private renderer: Renderer2) {}

    ngAfterViewInit(): void {
        if (this.clickable) {
            if (!this.inverted) {
                const parent = this._elementRef.nativeElement.parentNode;
                const icon: HTMLImageElement = this.renderer.createElement('i');
                icon.classList.add('fd-object-status__icon');
                icon.classList.add('sap-icon--' + this.glyph);
                icon.classList.add('fd-object-status--' + this.status);
                this.renderer.insertBefore(parent, icon, this._elementRef.nativeElement);
            }
        }
    }
    /** @hidden */
    ngOnChanges(): void {
        this.buildComponentCssClass();
    }

    /** @hidden */
    ngOnInit(): void {
        this.buildComponentCssClass();
    }

    @applyCssClass
    /** CssClassBuilder interface implementation
     * function must return single string
     * function is responsible for order which css classes are applied
     */
    buildComponentCssClass(): string[] {
        if (this.clickable) {
            return [
                'fd-object-status',
                this.inverted ? 'fd-object-status--inverted' : '',
                this.large ? 'fd-object-status--large' : '',
                this.status ? `fd-object-status--${this.status}` : '',
                this.indicationColor ? `fd-object-status--indication-${this.indicationColor}` : '',
                this.clickable ? 'fd-object-status--link' : '',
                this.class
            ];
        } else {
            return [
                'fd-object-status',
                this.inverted ? 'fd-object-status--inverted' : '',
                this.large ? 'fd-object-status--large' : '',
                this.status ? `fd-object-status--${this.status}` : '',
                this.glyph ? `sap-icon--${this.glyph}` : '',
                this.indicationColor ? `fd-object-status--indication-${this.indicationColor}` : '',
                this.clickable ? 'fd-object-status--link' : '',
                this.class
            ];
        }
    }

    /** @hidden */
    elementRef(): ElementRef<any> {
        return this._elementRef;
    }
}
