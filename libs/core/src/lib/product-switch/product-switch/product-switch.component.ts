import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Placement } from '@fundamental-ngx/core/shared';
import { BasePopoverClass } from '@fundamental-ngx/core/popover';
import { FD_PRODUCT_SWITCH_COMPONENT } from '../tokens';
import { provideDefaultTranslations } from "@fundamental-ngx/i18n";

@Component({
    selector: 'fd-product-switch',
    templateUrl: './product-switch.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: FD_PRODUCT_SWITCH_COMPONENT,
            useExisting: ProductSwitchComponent
        },
        provideDefaultTranslations(() => import('../i18n').then((m) => m.i18n))
    ]
})
export class ProductSwitchComponent extends BasePopoverClass {
    /** Placement of a popover. */
    @Input()
    placement: Placement = 'bottom-end';

    /** Whether the product switch is disabled. */
    @Input()
    disabled = false;
}
