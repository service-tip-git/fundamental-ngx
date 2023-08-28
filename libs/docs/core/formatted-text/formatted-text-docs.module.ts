import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormModule } from '@fundamental-ngx/core/form';
import { FormattedTextModule } from '@fundamental-ngx/core/formatted-text';
import { InputGroupModule } from '@fundamental-ngx/core/input-group';
import { PopoverModule } from '@fundamental-ngx/core/popover';
import { API_FILES } from '@fundamental-ngx/docs/core/shared';
import { ApiComponent, currentComponentProvider, SharedDocumentationPageModule } from '@fundamental-ngx/docs/shared';
import { FormattedTextExampleComponent } from './examples/base/formatted-text-example.component';
import { FormattedTextLinksExampleComponent } from './examples/links/formatted-text-links-example.component';
import { FormattedTextScriptExampleComponent } from './examples/script/formatted-text-script-example.component';
import { FormattedTextDocsComponent } from './formatted-text-docs.component';
import { FormattedTextHeaderComponent } from './formatted-text-header/formatted-text-header.component';

const routes: Routes = [
    {
        path: '',
        component: FormattedTextHeaderComponent,
        children: [
            { path: '', component: FormattedTextDocsComponent },
            { path: 'api', component: ApiComponent, data: { content: API_FILES.formattedText } }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedDocumentationPageModule,
        FormattedTextModule,
        FormModule,
        PopoverModule,
        InputGroupModule,
        FormattedTextDocsComponent,
        FormattedTextHeaderComponent,
        FormattedTextExampleComponent,
        FormattedTextLinksExampleComponent,
        FormattedTextScriptExampleComponent
    ],
    exports: [RouterModule],
    providers: [currentComponentProvider('formatted-text')]
})
export class FormattedTextDocsModule {}
