import { Component } from '@angular/core';
import {
    CodeExampleComponent,
    ComponentExampleComponent,
    DescriptionComponent,
    DocsSectionTitleComponent,
    ExampleFile,
    SeparatorComponent,
    getAssetFromModuleAssets
} from '@fundamental-ngx/docs/shared';
import { PlatformCheckboxGroupContentCheckboxComponent } from './examples/platform-checkbox-group-content-checkbox.component';
import { PlatformCheckboxGroupExampleComponent } from './examples/platform-checkbox-group-examples.component';
import { PlatformCheckboxGroupListObjectComponent } from './examples/platform-checkbox-group-list-object.component';
import { PlatformCheckboxGroupListComponent } from './examples/platform-checkbox-group-list.component';
const listCheckboxGroupHtml = 'platform-checkbox-group-list.component.html';
const listCheckboxGroupTs = 'platform-checkbox-group-list.component.ts';
const listObjectCheckboxGroupHtml = 'platform-checkbox-group-list-object.component.html';
const listObjectCheckboxGroupTs = 'platform-checkbox-group-list-object.component.ts';
const contentCheckboxGroupHtml = 'platform-checkbox-group-content-checkbox.component.html';
const contentCheckboxGroupTs = 'platform-checkbox-group-content-checkbox.component.ts';
const checkboxGroupExampleHtml = 'platform-checkbox-group-example.component.html';
const checkboxGroupExampleTs = 'platform-checkbox-group-examples.component.ts';

@Component({
    selector: 'app-checkbox-group',
    templateUrl: './platform-checkbox-group-docs.component.html',
    imports: [
        DocsSectionTitleComponent,
        DescriptionComponent,
        ComponentExampleComponent,
        PlatformCheckboxGroupListComponent,
        CodeExampleComponent,
        SeparatorComponent,
        PlatformCheckboxGroupListObjectComponent,
        PlatformCheckboxGroupContentCheckboxComponent,
        PlatformCheckboxGroupExampleComponent
    ]
})
export class PlatformCheckboxGroupDocsComponent {
    listCheckboxGroup: ExampleFile[] = [
        {
            language: 'html',
            code: getAssetFromModuleAssets(listCheckboxGroupHtml),
            fileName: 'platform-checkbox-group-list'
        },
        {
            language: 'typescript',
            code: getAssetFromModuleAssets(listCheckboxGroupTs),
            fileName: 'platform-checkbox-group-list',
            component: 'PlatformCheckboxGroupListComponent'
        }
    ];

    listObjectCheckboxGroup: ExampleFile[] = [
        {
            language: 'html',
            code: getAssetFromModuleAssets(listObjectCheckboxGroupHtml),
            fileName: 'platform-checkbox-group-list-object'
        },
        {
            language: 'typescript',
            code: getAssetFromModuleAssets(listObjectCheckboxGroupTs),
            fileName: 'platform-checkbox-group-list-object',
            component: 'PlatformCheckboxGroupListObjectComponent'
        }
    ];

    contentCheckboxGroup: ExampleFile[] = [
        {
            language: 'html',
            code: getAssetFromModuleAssets(contentCheckboxGroupHtml),
            fileName: 'platform-checkbox-group-content-checkbox'
        },
        {
            language: 'typescript',
            code: getAssetFromModuleAssets(contentCheckboxGroupTs),
            fileName: 'platform-checkbox-group-content-checkbox',
            component: 'PlatformCheckboxGroupContentCheckboxComponent'
        }
    ];

    checkboxGroupExample: ExampleFile[] = [
        {
            language: 'html',
            code: getAssetFromModuleAssets(checkboxGroupExampleHtml),
            fileName: 'platform-checkbox-group-example'
        },
        {
            language: 'typescript',
            code: getAssetFromModuleAssets(checkboxGroupExampleTs),
            fileName: 'platform-checkbox-group-examples',
            component: 'PlatformCheckboxGroupExampleComponent'
        }
    ];
}
