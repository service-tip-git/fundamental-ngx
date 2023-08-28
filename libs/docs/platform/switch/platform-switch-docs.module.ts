import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { API_FILES } from '@fundamental-ngx/docs/platform/shared';
import { ApiComponent, currentComponentProvider, SharedDocumentationPageModule } from '@fundamental-ngx/docs/shared';

import { FdpFormGroupModule, PlatformSwitchModule } from '@fundamental-ngx/platform/form';
import { DisabledSwitchExampleComponent } from './examples/disabled-switch-example/disabled-switch-example.component';
import { SemanticSwitchExampleComponent } from './examples/semantic-switch-example/semantic-switch-example.component';
import { SwitchConfigExampleComponent } from './examples/switch-config-example/switch-config-example.component';
import { SwitchFormsExampleComponent } from './examples/switch-form-example/switch-forms-example.component';
import { SwitchSizesExampleComponent } from './examples/switch-sizes-example/switch-sizes-example.component';
import { SwitchDocsComponent } from './switch-docs.component';
import { SwitchHeaderComponent } from './switch-header/switch-header.component';

const routes: Routes = [
    {
        path: '',
        component: SwitchHeaderComponent,
        children: [
            { path: '', component: SwitchDocsComponent },
            { path: 'api', component: ApiComponent, data: { content: API_FILES.switch } }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedDocumentationPageModule,
        PlatformSwitchModule,
        FdpFormGroupModule,
        SwitchHeaderComponent,
        SwitchDocsComponent,
        DisabledSwitchExampleComponent,
        SemanticSwitchExampleComponent,
        SwitchFormsExampleComponent,
        SwitchSizesExampleComponent,
        SwitchConfigExampleComponent
    ],
    exports: [RouterModule],
    providers: [currentComponentProvider('switch')]
})
export class PlatformSwitchDocsModule {}
