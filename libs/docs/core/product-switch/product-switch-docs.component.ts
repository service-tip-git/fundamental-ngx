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
import { ProductSwitchDndExampleComponent } from './examples/product-switch-dnd-example.component';
import { ProductSwitchListComponent } from './examples/product-switch-list/product-switch-list-example.component';
import { ProductSwitchSmallExampleComponent } from './examples/product-switch-small-example.component';

const smallProductSwitchH = 'product-switch-small-example.component.html';
const smallProductSwitchTs = 'product-switch-small-example.component.ts';

const productSwitchDndH = 'product-switch-dnd-example.component.html';
const productSwitchDndTs = 'product-switch-dnd-example.component.ts';

const listProductSwitchH = 'product-switch-list/product-switch-list-example.component.html';
const listProductSwitchTs = 'product-switch-list/product-switch-list-example.component.ts';

@Component({
    selector: 'app-product-switch',
    templateUrl: './product-switch-docs.component.html',
    imports: [
        DocsSectionTitleComponent,
        DescriptionComponent,
        ComponentExampleComponent,
        ProductSwitchDndExampleComponent,
        CodeExampleComponent,
        SeparatorComponent,
        ProductSwitchSmallExampleComponent,
        ProductSwitchListComponent
    ]
})
export class ProductSwitchDocsComponent {
    productSwitchBasicExample: ExampleFile[] = [
        {
            language: 'html',
            code: getAssetFromModuleAssets(productSwitchDndH),
            fileName: 'product-switch-dnd-example'
        },
        {
            language: 'typescript',
            code: getAssetFromModuleAssets(productSwitchDndTs),
            fileName: 'product-switch-dnd-example',
            component: 'ProductSwitchDndExampleComponent'
        }
    ];

    productSwitchSmallExample: ExampleFile[] = [
        {
            language: 'html',
            code: getAssetFromModuleAssets(smallProductSwitchH),
            fileName: 'product-switch-small-example'
        },
        {
            language: 'typescript',
            code: getAssetFromModuleAssets(smallProductSwitchTs),
            fileName: 'product-switch-small-example',
            component: 'ProductSwitchSmallExampleComponent'
        }
    ];

    productSwitchListExample: ExampleFile[] = [
        {
            language: 'html',
            code: getAssetFromModuleAssets(listProductSwitchH),
            fileName: 'product-switch-list-example'
        },
        {
            language: 'typescript',
            code: getAssetFromModuleAssets(listProductSwitchTs),
            fileName: 'product-switch-list-example',
            component: 'ProductSwitchListComponent'
        }
    ];
}
