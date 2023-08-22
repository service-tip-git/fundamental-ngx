import { Component, ViewEncapsulation } from '@angular/core';
import { ExampleFile, getAssetFromModuleAssets } from '@fundamental-ngx/docs/shared';
import { AdvancedUsageComponent } from './examples/advanced-usage/advanced-usage.component';
import { DescriptionComponent } from '../../shared/src/lib/core-helpers/description/description';
import { CodeExampleComponent } from '../../shared/src/lib/core-helpers/code-example/code-example.component';
import { DefaultExampleComponent } from './examples/default-example/default-example.component';
import { ComponentExampleComponent } from '../../shared/src/lib/core-helpers/component-example/component-example.component';
import { DocsSectionTitleComponent } from '../../shared/src/lib/core-helpers/docs-section-title/docs-section-title.component';

const defaultExampleHtml = 'default-example/default-example.component.html';
const defaultExampleTs = 'default-example/default-example.component.ts';

const advancedExampleHtml = 'advanced-usage/advanced-usage.component.html';
const advancedExampleTs = 'advanced-usage/advanced-usage.component.ts';
const advancedExampleCustomDirTs = 'advanced-usage/custom-selectable-item.directive.ts';

@Component({
    selector: 'app-tabs',
    templateUrl: './selectable-list-docs.component.html',
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [
        DocsSectionTitleComponent,
        ComponentExampleComponent,
        DefaultExampleComponent,
        CodeExampleComponent,
        DescriptionComponent,
        AdvancedUsageComponent
    ]
})
export class SelectableListDocsComponent {
    defaultExample: ExampleFile[] = [
        {
            code: getAssetFromModuleAssets(defaultExampleHtml),
            language: 'html',
            fileName: 'selectable-list-default-example',
            component: 'SelectableListDefaultExample'
        },
        {
            code: getAssetFromModuleAssets(defaultExampleTs),
            language: 'ts',
            fileName: 'selectable-list-default-example',
            component: 'SelectableListDefaultExample'
        }
    ];

    advancedExample: ExampleFile[] = [
        {
            code: getAssetFromModuleAssets(advancedExampleHtml),
            language: 'html',
            fileName: 'selectable-list-advanced-example',
            component: 'SelectableListAdvancedExample'
        },
        {
            code: getAssetFromModuleAssets(advancedExampleTs),
            language: 'ts',
            fileName: 'selectable-list-advanced-example',
            component: 'SelectableListAdvancedExample'
        },
        {
            code: getAssetFromModuleAssets(advancedExampleCustomDirTs),
            language: 'ts',
            fileName: 'selectable-list-advanced-example-custom-item',
            component: 'SelectableListAdvancedExampleCustomItem'
        }
    ];

    constructor() {}
}
