import { Component } from '@angular/core';

import { ExampleFile, getAssetFromModuleAssets } from '@fundamental-ngx/docs/shared';
import { ScrollSpyOffsetExampleComponent } from './examples/scroll-spy-custom-offset/scroll-spy-offset-example.component';
import { ScrollSpyCustomExampleComponent } from './examples/scroll-spy-custom-example/scroll-spy-custom-example.component';
import { SeparatorComponent } from '../../shared/src/lib/core-helpers/seperator/seperator.component';
import { CodeExampleComponent } from '../../shared/src/lib/core-helpers/code-example/code-example.component';
import { ScrollSpyExampleComponent } from './examples/scroll-spy-example/scroll-spy-example.component';
import { ComponentExampleComponent } from '../../shared/src/lib/core-helpers/component-example/component-example.component';
import { DescriptionComponent } from '../../shared/src/lib/core-helpers/description/description';
import { DocsSectionTitleComponent } from '../../shared/src/lib/core-helpers/docs-section-title/docs-section-title.component';

const standardSCSS = 'scroll-spy-example/scroll-spy-example.component.scss';
const customSCSS = 'scroll-spy-custom-example/scroll-spy-custom-example.component.scss';

const standardH = 'scroll-spy-example/scroll-spy-example.component.html';
const standardT = 'scroll-spy-example/scroll-spy-example.component.ts';
const customH = 'scroll-spy-custom-example/scroll-spy-custom-example.component.html';
const customT = 'scroll-spy-custom-example/scroll-spy-custom-example.component.ts';

@Component({
    selector: 'app-scroll-spy-docs',
    templateUrl: './scroll-spy-docs.component.html',
    styleUrls: ['./scroll-spy-docs.component.scss'],
    standalone: true,
    imports: [
        DocsSectionTitleComponent,
        DescriptionComponent,
        ComponentExampleComponent,
        ScrollSpyExampleComponent,
        CodeExampleComponent,
        SeparatorComponent,
        ScrollSpyCustomExampleComponent,
        ScrollSpyOffsetExampleComponent
    ]
})
export class ScrollSpyDocsComponent {
    scrollSpy: ExampleFile[] = [
        {
            language: 'html',
            code: getAssetFromModuleAssets(standardH),
            fileName: 'scroll-spy-example'
        },
        {
            language: 'typescript',
            component: 'ScrollSpyExampleComponent',
            code: getAssetFromModuleAssets(standardT),
            fileName: 'scroll-spy-example',
            scssFileCode: getAssetFromModuleAssets(standardSCSS)
        }
    ];

    scrollSpyCustom: ExampleFile[] = [
        {
            language: 'html',
            code: getAssetFromModuleAssets(customH),
            fileName: 'scroll-spy-custom-example',
            scssFileCode: getAssetFromModuleAssets(customSCSS)
        },
        {
            language: 'typescript',
            component: 'ScrollSpyCustomExampleComponent',
            code: getAssetFromModuleAssets(customT),
            fileName: 'scroll-spy-custom-example'
        }
    ];
}
