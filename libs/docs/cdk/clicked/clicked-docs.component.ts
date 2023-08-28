import { Component } from '@angular/core';
import {
    CodeExampleComponent,
    ComponentExampleComponent,
    DescriptionComponent,
    DocsSectionTitleComponent,
    getAssetFromModuleAssets
} from '@fundamental-ngx/docs/shared';
import { BasicExampleComponent } from './examples/basic-example/basic-example.component';
import { ProviderExampleComponent } from './examples/provider-example/provider-example.component';

const defaultExampleHtml = 'basic-example/basic-example.component.html';
const defaultExampleTs = 'basic-example/basic-example.component.ts';

const providerExampleHtml = 'provider-example/provider-example.component.html';
const providerExampleTs = 'provider-example/provider-example.component.ts';
const providerExampleDirectiveTs = 'provider-example/usage-with-provider.directive.ts';

@Component({
    templateUrl: './clicked-docs.component.html',
    standalone: true,
    imports: [
        DocsSectionTitleComponent,
        DescriptionComponent,
        ComponentExampleComponent,
        BasicExampleComponent,
        CodeExampleComponent,
        ProviderExampleComponent
    ]
})
export class ClickedDocsComponent {
    basicExample = [
        {
            code: getAssetFromModuleAssets(defaultExampleHtml),
            language: 'html',
            fileName: 'fd-clicked-basic-example',
            component: 'FdClickedBasicExample'
        },
        {
            code: getAssetFromModuleAssets(defaultExampleTs),
            language: 'ts',
            fileName: 'fd-clicked-basic-example',
            component: 'FdClickedBasicExample'
        }
    ];
    providerExample = [
        {
            code: getAssetFromModuleAssets(providerExampleHtml),
            language: 'html',
            fileName: 'fd-clicked-provider-example',
            component: 'FdClickedProviderExample'
        },
        {
            code: getAssetFromModuleAssets(providerExampleTs),
            language: 'ts',
            fileName: 'fd-clicked-provider-example',
            component: 'FdClickedProviderExample'
        },
        {
            code: getAssetFromModuleAssets(providerExampleDirectiveTs),
            language: 'ts',
            fileName: 'fd-clicked-provider-directive-example',
            component: 'FdClickedProviderDirectiveExample'
        }
    ];
}
