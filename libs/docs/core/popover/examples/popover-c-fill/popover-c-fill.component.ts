import { Component } from '@angular/core';
import { PopoverBodyComponent } from '@fundamental-ngx/core/popover';
import { PopoverControlComponent } from '@fundamental-ngx/core/popover';
import { PopoverComponent } from '@fundamental-ngx/core/popover';

@Component({
    selector: 'fd-popover-c-fill',
    templateUrl: './popover-c-fill.component.html',
    standalone: true,
    imports: [PopoverComponent, PopoverControlComponent, PopoverBodyComponent]
})
export class PopoverCFillComponent {}
