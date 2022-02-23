import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { API_FILES } from '@fundamental-ngx/docs/core/core-main';
import { SharedDocumentationModule } from '@fundamental-ngx/docs/common/shared-utils';
import { SharedDocumentationPageModule, ApiComponent } from '@fundamental-ngx/docs/common/shared-utils';
import { ObjectNumberDocsComponent } from './object-number-docs.component';
import {
    ObjectNumberBasicExampleComponent,
    ObjectNumberBoldExampleComponent,
    ObjectNumberDecimalExampleComponent,
    ObjectNumberLargeExampleComponent,
    ObjectNumberStatusExampleComponent,
    ObjectNumberTruncationExampleComponent,
    ObjectNumberUnitsExampleComponent
} from './examples/object-number-examples.component';
import { ObjectNumberHeaderComponent } from './object-number-header/object-number-header.component';
import { ObjectNumberModule } from '@fundamental-ngx/core/object-number';

const routes: Routes = [
    {
        path: '',
        component: ObjectNumberHeaderComponent,
        children: [
            { path: '', component: ObjectNumberDocsComponent },
            { path: 'api', component: ApiComponent, data: { content: API_FILES.objectNumber } }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedDocumentationModule,
        SharedDocumentationPageModule,
        ObjectNumberModule
    ],
    exports: [RouterModule],
    declarations: [
        ObjectNumberHeaderComponent,
        ObjectNumberDocsComponent,
        ObjectNumberBasicExampleComponent,
        ObjectNumberBoldExampleComponent,
        ObjectNumberLargeExampleComponent,
        ObjectNumberUnitsExampleComponent,
        ObjectNumberStatusExampleComponent,
        ObjectNumberDecimalExampleComponent,
        ObjectNumberTruncationExampleComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ObjectNumberDocsModule {}
