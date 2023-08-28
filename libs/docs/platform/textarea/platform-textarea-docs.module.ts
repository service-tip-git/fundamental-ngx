import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { API_FILES } from '@fundamental-ngx/docs/platform/shared';
import {
    ApiComponent,
    I18nDocsComponent,
    SharedDocumentationPageModule,
    currentComponentProvider,
    getI18nKey
} from '@fundamental-ngx/docs/shared';

import { FormMessageModule } from '@fundamental-ngx/core/form';
import { PlatformButtonModule } from '@fundamental-ngx/platform/button';
import { FdpFormGroupModule, PlatformTextAreaModule } from '@fundamental-ngx/platform/form';
import { PlatformTextareaAutogrowExampleComponent } from './examples/platform-textarea-autogrow-example.component';
import { PlatformTextareaBasicExampleComponent } from './examples/platform-textarea-basic-example.component';
import { PlatformTextareaCounterExampleComponent } from './examples/platform-textarea-counter-example.component';
import { PlatformTextareaCounterTemplateExampleComponent } from './examples/platform-textarea-counter-template-example.component';
import { PlatformTextareaDocsComponent } from './platform-textarea-docs.component';
import { PlatformTextareaHeaderComponent } from './platform-textarea-header/platform-textarea-header.component';

const routes: Routes = [
    {
        path: '',
        component: PlatformTextareaHeaderComponent,
        children: [
            { path: '', component: PlatformTextareaDocsComponent },
            { path: 'api', component: ApiComponent, data: { content: API_FILES.textarea } },
            { path: 'i18n', component: I18nDocsComponent, data: getI18nKey('platformTextarea') }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedDocumentationPageModule,
        PlatformTextAreaModule,
        FdpFormGroupModule,
        PlatformButtonModule,
        FormMessageModule,
        PlatformTextareaDocsComponent,
        PlatformTextareaHeaderComponent,
        PlatformTextareaBasicExampleComponent,
        PlatformTextareaCounterExampleComponent,
        PlatformTextareaCounterTemplateExampleComponent,
        PlatformTextareaAutogrowExampleComponent
    ],
    exports: [RouterModule],
    providers: [currentComponentProvider('textarea')]
})
export class PlatformTextareaDocsModule {}
