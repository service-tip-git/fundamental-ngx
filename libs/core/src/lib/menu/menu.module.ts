import { NgModule } from '@angular/core';

import { MenuComponent } from './menu.component';
import { MenuTitleDirective } from './directives/menu-title.directive';
import { MenuInteractiveDirective } from './directives/menu-interactive.directive';
import { MenuSeparatorComponent } from './menu-separator/menu-separator.component';
import { MenuAddonDirective } from './directives/menu-addon.directive';
import { MenuItemComponent, SubmenuComponent } from './menu-item/menu-item.component';
import { MenuShortcutDirective } from './directives/menu-shortcut.directive';
import { MenuTriggerDirective } from './directives/menu-trigger.directive';
import { DynamicComponentService } from '@fundamental-ngx/cdk/utils';
import { DeprecatedMenuCompactDirective } from './directives/deprecated-menu-compact.directive';
import { ContentDensityModule } from '@fundamental-ngx/core/content-density';

@NgModule({
    imports: [
        MenuComponent,
        MenuItemComponent,
        MenuAddonDirective,
        MenuSeparatorComponent,
        MenuShortcutDirective,
        MenuInteractiveDirective,
        MenuTitleDirective,
        SubmenuComponent,
        MenuTriggerDirective,
        DeprecatedMenuCompactDirective
    ],
    exports: [
        MenuComponent,
        MenuItemComponent,
        SubmenuComponent,
        MenuSeparatorComponent,
        MenuShortcutDirective,
        MenuInteractiveDirective,
        MenuTitleDirective,
        MenuAddonDirective,
        MenuTriggerDirective,
        DeprecatedMenuCompactDirective,
        ContentDensityModule
    ],
    providers: [DynamicComponentService]
})
export class MenuModule {}
