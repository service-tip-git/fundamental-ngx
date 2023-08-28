import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { API_FILES } from '@fundamental-ngx/docs/platform/shared';
import { ApiComponent, SharedDocumentationPageModule, currentComponentProvider } from '@fundamental-ngx/docs/shared';

import { PlatformActionBarWithContextualMenuExampleComponent } from './examples/platform-action-bar-contextual-menu-example.component';
import { PlatformActionBarCozyModeExampleComponent } from './examples/platform-action-bar-cozy-mode-example.component';
import { PlatformActionBarWithPositiveNegativeActionsExampleComponent } from './examples/platform-action-bar-positive-and-negative-action-example.component';
import { PlatformActionBarExamplesComponent } from './examples/platform-action-bar-simple-example.component';
import { PlatformActionBarWithBackButtonExampleComponent } from './examples/platform-action-bar-with-back-button-example.component';
import { PlatformActionBarWithDescriptionExampleComponent } from './examples/platform-action-bar-with-description-example.component';
import { PlatformActionBarWithLongPageTitleExampleComponent } from './examples/platform-action-bar-with-long-title-example.component';
import { PlatformActionBarDocsComponent } from './platform-action-bar-docs.component';
import { PlatformActionBarHeaderComponent } from './platform-action-bar-header/platform-action-bar-header.component';

import { PlatformActionBarModule } from '@fundamental-ngx/platform/action-bar';
import { PlatformActionButtonGroupModule } from '@fundamental-ngx/platform/action-button-group';
import { PlatformButtonModule } from '@fundamental-ngx/platform/button';
import { PlatformMenuModule } from '@fundamental-ngx/platform/menu';

const routes: Routes = [
    {
        path: '',
        component: PlatformActionBarHeaderComponent,
        children: [
            { path: '', component: PlatformActionBarDocsComponent },
            { path: 'api', component: ApiComponent, data: { content: API_FILES.actionbar } }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedDocumentationPageModule,
        PlatformActionBarModule,
        PlatformButtonModule,
        PlatformMenuModule,
        PlatformActionButtonGroupModule,
        PlatformActionBarDocsComponent,
        PlatformActionBarHeaderComponent,
        PlatformActionBarExamplesComponent,
        PlatformActionBarWithBackButtonExampleComponent,
        PlatformActionBarWithDescriptionExampleComponent,
        PlatformActionBarWithLongPageTitleExampleComponent,
        PlatformActionBarWithContextualMenuExampleComponent,
        PlatformActionBarWithPositiveNegativeActionsExampleComponent,
        PlatformActionBarCozyModeExampleComponent
    ],
    exports: [RouterModule],
    providers: [currentComponentProvider('action-bar')]
})
export class PlatformActionBarDocsModule {}
