import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { ThemingModule } from "@fundamental-ngx/core/theming";
import { DynamicComponentService } from "@fundamental-ngx/cdk/utils";

export const appConfig: ApplicationConfig = {
    providers: [
        importProvidersFrom(
            ThemingModule.withConfig({ defaultTheme: 'sap_horizon', changeThemeOnQueryParamChange: false })
        ),
        DynamicComponentService
    ]
};
