import { ChangeDetectionStrategy, Component, ViewEncapsulation, forwardRef } from '@angular/core';

import { BaseListItem } from '../base-list-item';
import { provideDefaultTranslations } from "@fundamental-ngx/i18n";

@Component({
    selector: 'fdp-standard-list-item',
    templateUrl: './standard-list-item.component.html',
    providers: [
        { provide: BaseListItem, useExisting: forwardRef(() => StandardListItemComponent) },
        provideDefaultTranslations(() => import('./i18n').then((m) => m.i18n))
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class StandardListItemComponent extends BaseListItem {}
