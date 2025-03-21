import { Overlay, ScrollStrategy } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '@fundamental-ngx/core/button';
import { CheckboxComponent } from '@fundamental-ngx/core/checkbox';
import { FormLabelComponent } from '@fundamental-ngx/core/form';
import { PopoverBodyComponent, PopoverComponent, PopoverControlComponent } from '@fundamental-ngx/core/popover';

@Component({
    selector: 'fd-popover-scroll-example',
    templateUrl: './popover-scroll-example.component.html',
    styleUrls: ['./popover-scroll-example.component.scss'],
    imports: [
        FormLabelComponent,
        PopoverComponent,
        PopoverControlComponent,
        ButtonComponent,
        PopoverBodyComponent,
        CheckboxComponent,
        FormsModule
    ]
})
export class PopoverScrollExampleComponent implements OnInit {
    /** Do nothing on scroll. */
    noopScrollStrategy: ScrollStrategy;

    /**
     * Close the overlay as soon as the user scrolls.
     * @param config Configuration to be used inside the scroll strategy.
     */
    closeScrollStrategy: ScrollStrategy;

    /** Block scrolling. */
    blockScrollStrategy: ScrollStrategy;

    /** Whether to close the overlay once the user has scrolled away completely. */
    autoClose = false;

    /** Time in milliseconds to throttle the scroll events. Use to increase performance. */
    scrollThrottle = 0;

    /**
     * Update the overlay's position on scroll.
     * @param config Configuration to be used inside the scroll strategy.
     * Allows debouncing the reposition calls.
     */
    repositionScrollStrategy: ScrollStrategy;

    constructor(private _overlay: Overlay) {}

    ngOnInit(): void {
        this.blockScrollStrategy = this._overlay.scrollStrategies.block();
        this.repositionScrollStrategy = this._overlay.scrollStrategies.reposition({
            autoClose: this.autoClose,
            scrollThrottle: this.scrollThrottle
        });
        this.noopScrollStrategy = this._overlay.scrollStrategies.noop();
        this.closeScrollStrategy = this._overlay.scrollStrategies.close();
    }

    refreshRepositionScrollStrategy(): void {
        this.repositionScrollStrategy = this._overlay.scrollStrategies.reposition({
            autoClose: this.autoClose,
            scrollThrottle: this.scrollThrottle
        });
    }
}
