import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
    CodeExampleComponent,
    ComponentExampleComponent,
    DescriptionComponent,
    DocsSectionTitleComponent,
    ExampleFile,
    SeparatorComponent,
    getAssetFromModuleAssets
} from '@fundamental-ngx/docs/shared';
import { MultiComboboxBylineExampleComponent } from './examples/multi-combobox-byline/multi-combobox-byline-example.component';
import { MultiComboboxColumnsExampleComponent } from './examples/multi-combobox-columns/multi-combobox-columns-example.component';
import { MultiComboboxDatasourceExampleComponent } from './examples/multi-combobox-datasource/multi-combobox-datasource-example.component';
import { MultiComboboxFormsExampleComponent } from './examples/multi-combobox-forms/multi-combobox-forms-example.component';
import { MultiComboboxGroupExampleComponent } from './examples/multi-combobox-group/multi-combobox-group-example.component';
import { MultiComboboxLoadingExampleComponent } from './examples/multi-combobox-loading/multi-combobox-loading-example.component';
import { MultiComboboxMobileExampleComponent } from './examples/multi-combobox-mobile/multi-combobox-mobile-example.component';
import { MultiComboboxStatesExampleComponent } from './examples/multi-combobox-states/multi-combobox-states-example.component';
import { MultiComboboxResponsiveTokenizerExampleComponent } from './examples/tokenizer/multi-combobox-responsive-tokenizer-example.component';

const multiComboboxDatasourceHtml = 'multi-combobox-datasource/multi-combobox-datasource-example.component.html';
const multiComboboxDatasourceTs = 'multi-combobox-datasource/multi-combobox-datasource-example.component.ts';
const multiComboboxMobileHtml = 'multi-combobox-mobile/multi-combobox-mobile-example.component.html';
const multiComboboxMobileTs = 'multi-combobox-mobile/multi-combobox-mobile-example.component.ts';
const multiComboboxFormsHtml = 'multi-combobox-forms/multi-combobox-forms-example.component.html';
const multiComboboxFormsTs = 'multi-combobox-forms/multi-combobox-forms-example.component.ts';
const multiComboboxGroupHtml = 'multi-combobox-group/multi-combobox-group-example.component.html';
const multiComboboxGroupTs = 'multi-combobox-group/multi-combobox-group-example.component.ts';
const multiComboboxColumnsHtml = 'multi-combobox-columns/multi-combobox-columns-example.component.html';
const multiComboboxColumnsTs = 'multi-combobox-columns/multi-combobox-columns-example.component.ts';
const multiComboboxStatesHtml = 'multi-combobox-states/multi-combobox-states-example.component.html';
const multiComboboxStatesTs = 'multi-combobox-states/multi-combobox-states-example.component.ts';
const multiComboboxLoadingHtml = 'multi-combobox-loading/multi-combobox-loading-example.component.html';
const multiComboboxLoadingTs = 'multi-combobox-loading/multi-combobox-loading-example.component.ts';
const multiComboboxTokenizerHtml = 'tokenizer/multi-combobox-responsive-tokenizer-example.component.html';
const multiComboboxTokenizerTs = 'tokenizer/multi-combobox-responsive-tokenizer-example.component.ts';
const multiComboboxBylineHtml = 'multi-combobox-byline/multi-combobox-byline-example.component.html';
const multiComboboxBylineTs = 'multi-combobox-byline/multi-combobox-byline-example.component.ts';

@Component({
    selector: 'app-multi-combobox',
    templateUrl: './multi-combobox-docs.component.html',
    imports: [
        DocsSectionTitleComponent,
        DescriptionComponent,
        ComponentExampleComponent,
        MultiComboboxDatasourceExampleComponent,
        CodeExampleComponent,
        SeparatorComponent,
        RouterLink,
        MultiComboboxMobileExampleComponent,
        MultiComboboxGroupExampleComponent,
        MultiComboboxColumnsExampleComponent,
        MultiComboboxStatesExampleComponent,
        MultiComboboxFormsExampleComponent,
        MultiComboboxLoadingExampleComponent,
        MultiComboboxResponsiveTokenizerExampleComponent,
        MultiComboboxBylineExampleComponent
    ]
})
export class MultiComboboxDocsComponent {
    multiComboboxDatasourceExample: ExampleFile[] = [
        {
            language: 'html',
            fileName: 'multi-combobox-datasource-example',
            code: getAssetFromModuleAssets(multiComboboxDatasourceHtml)
        },
        {
            language: 'typescript',
            fileName: 'multi-combobox-datasource-example',
            code: getAssetFromModuleAssets(multiComboboxDatasourceTs),
            component: 'MultiComboboxDatasourceExampleComponent'
        }
    ];

    multiComboboxMobileExample: ExampleFile[] = [
        {
            language: 'html',
            fileName: 'multi-combobox-mobile-example',
            code: getAssetFromModuleAssets(multiComboboxMobileHtml)
        },
        {
            language: 'typescript',
            fileName: 'multi-combobox-mobile-example',
            code: getAssetFromModuleAssets(multiComboboxMobileTs),
            component: 'MultiComboboxMobileExampleComponent'
        }
    ];

    multiComboboxGroupExample: ExampleFile[] = [
        {
            language: 'html',
            fileName: 'multi-combobox-group-example',
            code: getAssetFromModuleAssets(multiComboboxGroupHtml)
        },
        {
            language: 'typescript',
            fileName: 'multi-combobox-group-example',
            code: getAssetFromModuleAssets(multiComboboxGroupTs),
            component: 'MultiComboboxGroupExampleComponent'
        }
    ];

    multiComboboxColumnsExample: ExampleFile[] = [
        {
            language: 'html',
            fileName: 'multi-combobox-columns-example',
            code: getAssetFromModuleAssets(multiComboboxColumnsHtml)
        },
        {
            language: 'typescript',
            fileName: 'multi-combobox-columns-example',
            code: getAssetFromModuleAssets(multiComboboxColumnsTs),
            component: 'MultiComboboxColumnsExampleComponent'
        }
    ];

    multiComboboxFormExample: ExampleFile[] = [
        {
            language: 'html',
            fileName: 'multi-combobox-forms-example',
            code: getAssetFromModuleAssets(multiComboboxFormsHtml)
        },
        {
            language: 'typescript',
            fileName: 'multi-combobox-forms-example',
            code: getAssetFromModuleAssets(multiComboboxFormsTs),
            component: 'MultiComboboxFormsExampleComponent'
        }
    ];

    multiComboboxStatesExample: ExampleFile[] = [
        {
            language: 'html',
            fileName: 'multi-combobox-states-example',
            code: getAssetFromModuleAssets(multiComboboxStatesHtml)
        },
        {
            language: 'typescript',
            fileName: 'multi-combobox-states-example',
            code: getAssetFromModuleAssets(multiComboboxStatesTs),
            component: 'MultiComboboxStatesExampleComponent'
        }
    ];

    multiComboboxLoadingExample: ExampleFile[] = [
        {
            language: 'html',
            fileName: 'multi-combobox-loading-example',
            code: getAssetFromModuleAssets(multiComboboxLoadingHtml)
        },
        {
            language: 'typescript',
            fileName: 'multi-combobox-loading-example',
            code: getAssetFromModuleAssets(multiComboboxLoadingTs),
            component: 'MultiComboboxLoadingExampleComponent'
        }
    ];

    multiComboboxTokenizerExample: ExampleFile[] = [
        {
            language: 'html',
            fileName: 'multi-combobox-responsive-tokenizer-example',
            code: getAssetFromModuleAssets(multiComboboxTokenizerHtml)
        },
        {
            language: 'typescript',
            fileName: 'multi-combobox-responsive-tokenizer-example',
            code: getAssetFromModuleAssets(multiComboboxTokenizerTs),
            component: 'MultiComboboxResponsiveTokenizerExampleComponent'
        }
    ];

    multiComboboxBylineExample: ExampleFile[] = [
        {
            language: 'html',
            fileName: 'multi-combobox-byline-example',
            code: getAssetFromModuleAssets(multiComboboxBylineHtml)
        },
        {
            language: 'typescript',
            fileName: 'multi-combobox-byline-example',
            code: getAssetFromModuleAssets(multiComboboxBylineTs),
            component: 'MultiComboboxBylineExampleComponent'
        }
    ];
}
