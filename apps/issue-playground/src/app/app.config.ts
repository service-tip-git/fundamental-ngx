import { ApplicationConfig } from '@angular/core';
import { DynamicComponentService } from '@fundamental-ngx/cdk/utils';
import { provideTheming } from '@fundamental-ngx/core/theming';

export const appConfig: ApplicationConfig = {
    providers: [
        provideTheming({
            defaultTheme: 'sap_horizon',
            changeThemeOnQueryParamChange: false
        }),
        DynamicComponentService
    ]
};
