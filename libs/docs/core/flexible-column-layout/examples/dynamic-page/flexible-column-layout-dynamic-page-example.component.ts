import { Component, ElementRef, ViewChild } from '@angular/core';

import { CdkScrollable } from '@angular/cdk/overlay';
import { NgStyle } from '@angular/common';
import { ButtonComponent } from '@fundamental-ngx/core/button';
import { DynamicPageModule } from '@fundamental-ngx/core/dynamic-page';
import { FlexibleColumnLayout, FlexibleColumnLayoutModule } from '@fundamental-ngx/core/flexible-column-layout';
import { ToolbarComponent } from '@fundamental-ngx/core/toolbar';

@Component({
    selector: 'fd-flexible-column-layout-dynamic-page-example',
    templateUrl: './flexible-column-layout-dynamic-page-example.component.html',
    styleUrls: ['./flexible-column-layout-dynamic-page-example.component.scss'],
    imports: [ButtonComponent, FlexibleColumnLayoutModule, DynamicPageModule, ToolbarComponent, NgStyle, CdkScrollable]
})
export class FlexibleColumnLayoutDynamicPageExampleComponent {
    /**
     * property needed ONLY for the current documentation purposes
     * provides access to the HTML element with "overlay" reference
     */
    @ViewChild('overlay')
    overlay: ElementRef<HTMLElement>;

    /**
     * property set by the consuming application (name can vary????????)
     * sets the initial layout of the component to 'OneColumnStartFullScreen'
     * sets a new layout for the component
     */
    localLayout: FlexibleColumnLayout = 'OneColumnStartFullScreen';

    /**
     * property set by the consuming application
     * specifies if the control buttons for Enter/Exit Full Screen and Close
     * are visible in the middle sectioon
     */
    showMidColumnControls = this.localLayout.startsWith('Two') || this.localLayout.includes('FullScreen');

    /**
     * property set by the consuming application
     * checks if the component layout is in full screen
     */
    isFullScreen = this.localLayout.includes('FullScreen');

    /**
     * property needed ONLY for the current documentation purposes
     * specifies if the doc example is rendered in fullscreen or not
     */
    fullscreen = false;

    /**
     * function set by the consuming application
     * this function is reacting to events (button clicks) and
     * updates the local property which sets a new layout for the component.
     * Available values for the layouts include:
     * 'OneColumnStartFullScreen' | 'OneColumnMidFullScreen' | 'OneColumnEndFullScreen' |
     * 'TwoColumnsStartExpanded' | 'TwoColumnsMidExpanded' | 'TwoColumnsEndExpanded' |
     * 'ThreeColumnsMidExpanded' | 'ThreeColumnsEndExpanded' | 'ThreeColumnsStartMinimized' |
     * 'ThreeColumnsEndMinimized';
     */
    changeLayout(newValue: FlexibleColumnLayout): void {
        this.localLayout = newValue;
        this.showMidColumnControls = this.localLayout.startsWith('Two') || this.localLayout.includes('FullScreen');
        this.isFullScreen = this.localLayout.includes('FullScreen');
    }

    /**
     * function needed ONLY for the current documentation purposes
     * opens the example in full screen
     */
    enterFullscreenExample(): void {
        this.fullscreen = true;
        this.overlay.nativeElement.style.width = '100%';
    }

    /**
     * function needed ONLY for the current documentation purposes
     * exits the full screen mode of the example
     */
    exitFullscreenExample(event: Event): void {
        event.stopPropagation();
        this.fullscreen = false;
        this.overlay.nativeElement.style.width = '0%';
    }
}
