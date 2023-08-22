import { Component } from '@angular/core';

import { ExampleFile, getAssetFromModuleAssets } from '@fundamental-ngx/docs/shared';
import { TextExpandableComponent } from './examples/text-expandable.component';
import { TextHyphenationComponent } from './examples/text-hyphenation.component';
import { DescriptionComponent } from '../../shared/src/lib/core-helpers/description/description';
import { TextMaxLinesComponent } from './examples/text-max-lines.component';
import { TextWhitespacesComponent } from './examples/text-whitespaces.component';
import { SeparatorComponent } from '../../shared/src/lib/core-helpers/seperator/seperator.component';
import { CodeExampleComponent } from '../../shared/src/lib/core-helpers/code-example/code-example.component';
import { TextBasicComponent } from './examples/text-basic.component';
import { ComponentExampleComponent } from '../../shared/src/lib/core-helpers/component-example/component-example.component';
import { DocsSectionTitleComponent } from '../../shared/src/lib/core-helpers/docs-section-title/docs-section-title.component';

const textHyphenationScss = 'text-hyphenation.component.scss';

const textBasicHtml = 'text-basic.component.html';
const textWhitespacesHtml = 'text-whitespaces.component.html';
const textWhitespacesTs = 'text-whitespaces.component.ts';
const textMaxLinesHtml = 'text-max-lines.component.html';
const textMaxLinesTs = 'text-max-lines.component.ts';
const textHyphenationHtml = 'text-hyphenation.component.html';
const textHyphenationTs = 'text-hyphenation.component.ts';
const textExpandableHtml = 'text-expandable.component.html';
const textExpandableTs = 'text-expandable.component.ts';

@Component({
    selector: 'app-input',
    templateUrl: './text-docs.component.html',
    standalone: true,
    imports: [
        DocsSectionTitleComponent,
        ComponentExampleComponent,
        TextBasicComponent,
        CodeExampleComponent,
        SeparatorComponent,
        TextWhitespacesComponent,
        TextMaxLinesComponent,
        DescriptionComponent,
        TextHyphenationComponent,
        TextExpandableComponent
    ]
})
export class TextDocsComponent {
    textBasic: ExampleFile[] = [
        {
            language: 'html',
            code: getAssetFromModuleAssets(textBasicHtml),
            fileName: 'text-basic'
        }
    ];

    textWhitespaces: ExampleFile[] = [
        {
            language: 'html',
            code: getAssetFromModuleAssets(textWhitespacesHtml),
            fileName: 'text-whitespaces'
        },
        {
            language: 'typescript',
            code: getAssetFromModuleAssets(textWhitespacesTs),
            component: 'TextWhitespacesComponent',
            fileName: 'text-whitespaces'
        }
    ];

    textMaxLines: ExampleFile[] = [
        {
            language: 'html',
            code: getAssetFromModuleAssets(textMaxLinesHtml),
            fileName: 'text-max-lines'
        },
        {
            language: 'typescript',
            code: getAssetFromModuleAssets(textMaxLinesTs),
            component: 'TextMaxLinesComponent',
            fileName: 'text-max-lines'
        }
    ];

    textHyphenation: ExampleFile[] = [
        {
            language: 'html',
            code: getAssetFromModuleAssets(textHyphenationHtml),
            fileName: 'text-hyphenation',
            scssFileCode: getAssetFromModuleAssets(textHyphenationScss)
        },
        {
            language: 'typescript',
            code: getAssetFromModuleAssets(textHyphenationTs),
            component: 'TextHyphenationComponent',
            fileName: 'text-hyphenation'
        }
    ];

    textExpandable: ExampleFile[] = [
        {
            language: 'html',
            code: getAssetFromModuleAssets(textExpandableHtml),
            fileName: 'text-expandable'
        },
        {
            language: 'typescript',
            code: getAssetFromModuleAssets(textExpandableTs),
            component: 'TextExpandableComponent',
            fileName: 'text-expandable'
        }
    ];
}
