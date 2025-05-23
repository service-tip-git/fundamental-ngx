import { Component } from '@angular/core';
import {
    CodeExampleComponent,
    CodeSnippetComponent,
    ComponentExampleComponent,
    DescriptionComponent,
    DocsSectionTitleComponent,
    ExampleFile,
    SeparatorComponent,
    getAssetFromModuleAssets
} from '@fundamental-ngx/docs/shared';
import { FlexibleColumnLayoutCustomConfigExampleComponent } from './examples/custom-config/flexible-column-layout-custom-config-example.component';
import { FlexibleColumnLayoutExampleComponent } from './examples/default/flexible-column-layout-example.component';
import { FlexibleColumnLayoutDynamicPageExampleComponent } from './examples/dynamic-page/flexible-column-layout-dynamic-page-example.component';

const defaultFlexibleColumnLayoutScss = 'default/flexible-column-layout-example.component.scss';
const flexibleColumnLayoutDynamicPageScss = 'dynamic-page/flexible-column-layout-dynamic-page-example.component.scss';
const flexibleColumnLayoutCustomConfigScss =
    'custom-config/flexible-column-layout-custom-config-example.component.scss';

const defaultFlexibleColumnLayoutHtml = 'default/flexible-column-layout-example.component.html';
const defaultFlexibleColumnLayoutTs = 'default/flexible-column-layout-example.component.ts';
const flexibleColumnLayoutDynamicPageHtml = 'dynamic-page/flexible-column-layout-dynamic-page-example.component.html';
const flexibleColumnLayoutDynamicPageTs = 'dynamic-page/flexible-column-layout-dynamic-page-example.component.ts';
const defaultConfigExampleSrc = 'custom-config/flexible-column-layout-global-config-example.ts';
const flexibleColumnLayoutCustomConfigHtml =
    'custom-config/flexible-column-layout-custom-config-example.component.html';
const flexibleColumnLayoutCustomConfigTs = 'custom-config/flexible-column-layout-custom-config-example.component.ts';

@Component({
    selector: 'fd-flexible-column-layout-docs',
    templateUrl: './flexible-column-layout-docs.component.html',
    imports: [
        DocsSectionTitleComponent,
        ComponentExampleComponent,
        FlexibleColumnLayoutExampleComponent,
        CodeExampleComponent,
        SeparatorComponent,
        FlexibleColumnLayoutDynamicPageExampleComponent,
        DescriptionComponent,
        CodeSnippetComponent,
        FlexibleColumnLayoutCustomConfigExampleComponent
    ]
})
export class FlexibleColumnLayoutDocsComponent {
    defaultFlexibleColumnLayout: ExampleFile[] = [
        {
            language: 'html',
            code: getAssetFromModuleAssets(defaultFlexibleColumnLayoutHtml),
            fileName: 'flexible-column-layout-example',
            scssFileCode: getAssetFromModuleAssets(defaultFlexibleColumnLayoutScss)
        },
        {
            language: 'typescript',
            component: 'FlexibleColumnLayoutExampleComponent',
            code: getAssetFromModuleAssets(defaultFlexibleColumnLayoutTs),
            fileName: 'flexible-column-layout-example'
        }
    ];

    flexibleColumnLayoutDynamicPage: ExampleFile[] = [
        {
            language: 'html',
            code: getAssetFromModuleAssets(flexibleColumnLayoutDynamicPageHtml),
            fileName: 'flexible-column-layout-dynamic-page-example',
            scssFileCode: getAssetFromModuleAssets(flexibleColumnLayoutDynamicPageScss)
        },
        {
            language: 'typescript',
            component: 'FlexibleColumnLayoutDynamicPageExampleComponent',
            code: getAssetFromModuleAssets(flexibleColumnLayoutDynamicPageTs),
            fileName: 'flexible-column-layout-dynamic-page-example'
        }
    ];

    flexibleColumnLayoutCustomConfig: ExampleFile[] = [
        {
            language: 'html',
            code: getAssetFromModuleAssets(flexibleColumnLayoutCustomConfigHtml),
            fileName: 'flexible-column-layout-custom-config-example',
            scssFileCode: getAssetFromModuleAssets(flexibleColumnLayoutCustomConfigScss)
        },
        {
            language: 'typescript',
            component: 'FlexibleColumnLayoutCustomConfigExampleComponent',
            code: getAssetFromModuleAssets(flexibleColumnLayoutCustomConfigTs),
            fileName: 'flexible-column-layout-custom-config-example'
        }
    ];

    defaultConfigExample = defaultConfigExampleSrc;
}
