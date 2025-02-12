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
import { SegmentedButtonComplexExampleComponent } from './examples/segmented-button-complex-example/segmented-button-complex-example.component';
import { SegmentedButtonDefaultExampleComponent } from './examples/segmented-button-default-example.component';
import { SegmentedButtonFormExampleComponent } from './examples/segmented-button-form-example/segmented-button-form-example.component';
import { SegmentedButtonToggleExampleComponent } from './examples/segmented-button-toggle-example.component';

const segmentedDefaultExample = 'segmented-button-default-example.component.html';
const segmentedDefaultExampleTs = 'segmented-button-default-example.component.ts';
const segmentedToggleExample = 'segmented-button-toggle-example.component.html';
const segmentedToggleExampleTs = 'segmented-button-toggle-example.component.ts';
const segmentedButtonFormTs = 'segmented-button-form-example/segmented-button-form-example.component.ts';
const segmentedButtonFormHtml = 'segmented-button-form-example/segmented-button-form-example.component.html';
const segmentedButtonCustomTs = 'segmented-button-complex-example/segmented-button-complex-example.component.ts';
const segmentedButtonCustomHtml = 'segmented-button-complex-example/segmented-button-complex-example.component.html';

@Component({
    selector: 'app-segmented-button',
    templateUrl: './segmented-button-docs.component.html',
    imports: [
        DocsSectionTitleComponent,
        DescriptionComponent,
        ComponentExampleComponent,
        SegmentedButtonDefaultExampleComponent,
        CodeExampleComponent,
        SeparatorComponent,
        SegmentedButtonToggleExampleComponent,
        SegmentedButtonComplexExampleComponent,
        SegmentedButtonFormExampleComponent
    ]
})
export class SegmentedButtonDocsComponent {
    defaultToggleHtml: ExampleFile[] = [
        {
            language: 'html',
            code: getAssetFromModuleAssets(segmentedToggleExample),
            fileName: 'segmented-button-toggle-example'
        },
        {
            component: 'SegmentedButtonToggleExampleComponent',
            language: 'typescript',
            code: getAssetFromModuleAssets(segmentedToggleExampleTs),
            fileName: 'segmented-button-toggle-example'
        }
    ];

    defaultSizeHtml: ExampleFile[] = [
        {
            language: 'html',
            code: getAssetFromModuleAssets(segmentedDefaultExample),
            fileName: 'segmented-button-default-example'
        },
        {
            component: 'SegmentedButtonDefaultExampleComponent',
            language: 'typescript',
            code: getAssetFromModuleAssets(segmentedDefaultExampleTs),
            fileName: 'segmented-button-default-example'
        }
    ];

    formExample: ExampleFile[] = [
        {
            language: 'html',
            code: getAssetFromModuleAssets(segmentedButtonFormHtml),
            fileName: 'segmented-button-form-example'
        },
        {
            component: 'SegmentedButtonFormExampleComponent',
            language: 'typescript',
            code: getAssetFromModuleAssets(segmentedButtonFormTs),
            fileName: 'segmented-button-form-example'
        }
    ];

    complexExample: ExampleFile[] = [
        {
            language: 'html',
            code: getAssetFromModuleAssets(segmentedButtonCustomHtml),
            fileName: 'segmented-button-complex-example'
        },
        {
            component: 'SegmentedButtonComplexExampleComponent',
            language: 'typescript',
            code: getAssetFromModuleAssets(segmentedButtonCustomTs),
            fileName: 'segmented-button-complex-example'
        }
    ];
}
