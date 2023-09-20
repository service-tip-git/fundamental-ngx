import { Component } from '@angular/core';
import { AvatarComponent } from '@fundamental-ngx/core/avatar';
import { ButtonModule } from '@fundamental-ngx/core/button';
import { PopoverBodyComponent, PopoverComponent, PopoverControlComponent } from '@fundamental-ngx/core/popover';

@Component({
    selector: 'fd-popover-resizable-example',
    templateUrl: './popover-resizable-example.component.html',
    styleUrls: ['popover-resizable-example.component.scss'],
    standalone: true,
    imports: [PopoverComponent, PopoverControlComponent, ButtonModule, PopoverBodyComponent, AvatarComponent]
})
export class PopoverResizableExampleComponent {}
