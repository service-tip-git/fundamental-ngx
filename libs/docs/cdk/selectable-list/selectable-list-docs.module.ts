import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectableListModule } from '@fundamental-ngx/cdk/utils';
import { API_FILES } from '@fundamental-ngx/docs/cdk/shared';
import { ApiComponent, SharedDocumentationPageModule, currentComponentProvider } from '@fundamental-ngx/docs/shared';
import { AdvancedUsageComponent } from './examples/advanced-usage/advanced-usage.component';
import { CustomSelectableItemDirective } from './examples/advanced-usage/custom-selectable-item.directive';
import { DefaultExampleComponent } from './examples/default-example/default-example.component';
import { SelectableListDocsComponent } from './selectable-list-docs.component';
import { SelectableListHeaderComponent } from './selectable-list-header/selectable-list-header.component';

const routes: Routes = [
    {
        path: '',
        component: SelectableListHeaderComponent,
        children: [
            {
                path: '',
                component: SelectableListDocsComponent
            },
            { path: 'api', component: ApiComponent, data: { content: API_FILES.selectableList } }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedDocumentationPageModule,
        SelectableListModule,
        SelectableListHeaderComponent,
        SelectableListDocsComponent,
        DefaultExampleComponent,
        CustomSelectableItemDirective,
        AdvancedUsageComponent
    ],
    exports: [RouterModule],
    providers: [currentComponentProvider('selectable-list')]
})
export class SelectableListDocsModule {}
