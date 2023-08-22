import { Component } from '@angular/core';
import { ExampleFile, getAssetFromModuleAssets } from '@fundamental-ngx/docs/shared';
import { DescriptionComponent } from '../../shared/src/lib/core-helpers/description/description';
import {
    ObjectStatusTextExampleComponent,
    ObjectStatusTextIconExampleComponent,
    ObjectStatusGenericExampleComponent,
    ObjectStatusClickableAndIconExampleComponent,
    ObjectStatusInvertedTextExampleComponent,
    ObjectStatusInvertedGenericTextExampleComponent,
    ObjectStatusLargeExampleComponent
} from './examples/object-status-examples.component';
import { SeparatorComponent } from '../../shared/src/lib/core-helpers/seperator/seperator.component';
import { CodeExampleComponent } from '../../shared/src/lib/core-helpers/code-example/code-example.component';
import { ObjectStatusDefaultExampleComponent } from './examples/object-status-default-example.component';
import { ComponentExampleComponent } from '../../shared/src/lib/core-helpers/component-example/component-example.component';
import { DocsSectionTitleComponent } from '../../shared/src/lib/core-helpers/docs-section-title/docs-section-title.component';

const objectStatusExamplesScss = 'object-status-examples.component.scss';

const objectStatusDefaultTs = 'object-status-default-example.component.ts';
const objectStatusDefaultHtml = 'object-status-default-example.component.html';
const ObjectStatusTextExample = 'object-status-text-example.component.html';
const ObjectStatusGenericTextExample = 'object-status-generic-text-example.component.html';
const ObjectStatusTextIconExample = 'object-status-icon-text-example.component.html';
const ObjectStatusClickableAndIConExample = 'object-status-clickable-and-icon-example.component.html';
const ObjectStatusInvertedTextExample = 'object-status-inverted-example.component.html';
const ObjectStatusInvertedGenericExample = 'object-status-inverted-generic-text-example.component.html';
const ObjectStatusLargeExample = 'object-status-large-example.component.html';

@Component({
    selector: 'app-object-status',
    templateUrl: './object-status-docs.component.html',
    standalone: true,
    imports: [
        DocsSectionTitleComponent,
        ComponentExampleComponent,
        ObjectStatusDefaultExampleComponent,
        CodeExampleComponent,
        SeparatorComponent,
        ObjectStatusTextExampleComponent,
        DescriptionComponent,
        ObjectStatusTextIconExampleComponent,
        ObjectStatusGenericExampleComponent,
        ObjectStatusClickableAndIconExampleComponent,
        ObjectStatusInvertedTextExampleComponent,
        ObjectStatusInvertedGenericTextExampleComponent,
        ObjectStatusLargeExampleComponent
    ]
})
export class ObjectStatusDocsComponent {
    defaultObjectStatusHtmlType: ExampleFile[] = [
        {
            language: 'typescript',
            code: getAssetFromModuleAssets(objectStatusDefaultTs),
            fileName: 'object-status-default-example',
            component: 'ObjectStatusDefaultExampleComponent'
        },
        {
            language: 'html',
            code: getAssetFromModuleAssets(objectStatusDefaultHtml),
            fileName: 'object-status-default-example'
        },
        {
            language: 'scss',
            code: getAssetFromModuleAssets(objectStatusExamplesScss),
            fileName: 'object-status-examples',
            component: 'ObjectStatusDefaultExample',
            scssFileCode: getAssetFromModuleAssets(objectStatusExamplesScss)
        }
    ];

    ObjectStatusTextExample: ExampleFile[] = [
        {
            language: 'html',
            code: getAssetFromModuleAssets(ObjectStatusTextExample),
            fileName: 'object-status-text-example'
        }
    ];

    ObjectStatusTextIconExample: ExampleFile[] = [
        {
            language: 'html',
            code: getAssetFromModuleAssets(ObjectStatusGenericTextExample),
            fileName: 'object-status-generic-text-example'
        }
    ];

    ObjectStatusNumericIconExample: ExampleFile[] = [
        {
            language: 'html',
            code: getAssetFromModuleAssets(ObjectStatusTextIconExample),
            fileName: 'object-status-icon-text-example'
        }
    ];

    ObjectStatusclickableAndIconExample: ExampleFile[] = [
        {
            language: 'html',
            code: getAssetFromModuleAssets(ObjectStatusClickableAndIConExample),
            fileName: 'object-status-clickable-and-icon-example'
        }
    ];

    ObjectStatusInvertedExample: ExampleFile[] = [
        {
            language: 'html',
            code: getAssetFromModuleAssets(ObjectStatusInvertedTextExample),
            fileName: 'object-status-inverted-example'
        }
    ];

    ObjectStatusInverterdGenericExample: ExampleFile[] = [
        {
            language: 'html',
            code: getAssetFromModuleAssets(ObjectStatusInvertedGenericExample),
            fileName: 'object-status-inverted-generic-text-example'
        }
    ];

    ObjectStatusLargeExample: ExampleFile[] = [
        {
            language: 'html',
            code: getAssetFromModuleAssets(ObjectStatusLargeExample),
            fileName: 'object-status-large-example'
        }
    ];
}
