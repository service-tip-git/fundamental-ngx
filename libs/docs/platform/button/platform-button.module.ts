import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
    DeprecatedButtonAriaPressed,
    DeprecatedButtonAriaSelected,
    PlatformButtonModule
} from '@fundamental-ngx/platform/button';

import { API_FILES } from '@fundamental-ngx/docs/platform/shared';
import { ApiComponent, currentComponentProvider, SharedDocumentationPageModule } from '@fundamental-ngx/docs/shared';

import {
    PlatformButtonIconsExampleComponent,
    PlatformButtonSizesExampleComponent,
    PlatformButtonStateExampleComponent,
    PlatformButtonTruncateExampleComponent,
    PlatformButtonTypesExampleComponent
} from './examples/platform-button-examples.component';
import { PlatformButtonDocsComponent } from './platform-button-docs.component';
import { PlatformButtonHeaderComponent } from './platform-button-header/platform-button-header.component';

import { moduleDeprecationsProvider } from '@fundamental-ngx/core';

const routes: Routes = [
    {
        path: '',
        component: PlatformButtonHeaderComponent,
        children: [
            { path: '', component: PlatformButtonDocsComponent },
            { path: 'api', component: ApiComponent, data: { content: API_FILES.button } }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedDocumentationPageModule,
        PlatformButtonModule,
        PlatformButtonDocsComponent,
        PlatformButtonHeaderComponent,
        PlatformButtonTypesExampleComponent,
        PlatformButtonSizesExampleComponent,
        PlatformButtonIconsExampleComponent,
        PlatformButtonTruncateExampleComponent,
        PlatformButtonStateExampleComponent
    ],
    exports: [RouterModule],
    providers: [
        moduleDeprecationsProvider(DeprecatedButtonAriaPressed),
        moduleDeprecationsProvider(DeprecatedButtonAriaSelected),
        currentComponentProvider('button')
    ]
})
export class PlatformButtonDocsModule {}
