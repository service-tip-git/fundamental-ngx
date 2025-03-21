import { Component } from '@angular/core';
const defaultFormGeneratorhtml = 'platform-form-generator-example.component.html';
const defaultFormGeneratorSrc = 'platform-form-generator-example.component.ts';

const defaultObservableFormGeneratorhtml = 'platform-form-generator-observable-example.component.html';
const defaultObservableFormGeneratorSrc = 'platform-form-generator-observable-example.component.ts';

const customFormGeneratorhtml = 'platform-form-generator-custom-component-example.component.html';
const customFormGeneratorSrc = 'platform-form-generator-custom-component-example.component.ts';

const programaticSubmitHtml = 'platform-form-generator-programatic-submit.component.html';
const programaticSubmitSrc = 'platform-form-generator-programatic-submit.component.ts';

const customErrorsHtml = 'platform-form-generator-custom-error-example.component.html';
const customErrorsSrc = 'platform-form-generator-custom-error-example.component.ts';

const formFieldLayoutGeneratorhtml = 'platform-form-generator-field-layout-example.component.html';
const formFieldLayoutGeneratorSrc = 'platform-form-generator-field-layout-example.component.ts';

const noColonsForLabelHtml = 'platform-form-generator-no-colons-example.component.html';
const noColonsForLabelSrc = 'platform-form-generator-no-colons-example.component.ts';

const groupingHtml = 'platform-form-generator-grouping-example.component.html';
const groupingSrc = 'platform-form-generator-grouping-example.component.ts';

const customFieldLayoutHtml = 'platform-form-generator-custom-field-layout-example.component.html';
const customFieldLayoutSrc = 'platform-form-generator-custom-field-layout-example.component.ts';

const inlineHelpHtml = 'platform-form-generator-inline-help-example.component.html';
const inlineHelpSrc = 'platform-form-generator-inline-help-example.component.ts';

const defaultConfigSrc = 'platform-form-generator-global-config-example.ts';

const loadingFormGeneratorhtml = 'loading/platform-form-generator-loading-example.component.html';
const loadingFormGeneratorSrc = 'loading/platform-form-generator-loading-example.component.ts';

import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
    CodeExampleComponent,
    CodeSnippetComponent,
    ComponentExampleComponent,
    DescriptionComponent,
    DocsSectionTitleComponent,
    ExampleFile,
    SeparatorComponent,
    getAssetFromModuleAssets,
    getExampleFile
} from '@fundamental-ngx/docs/shared';
import { PlatformFormGeneratorAdvancedExampleComponent } from './examples/advanced/platform-form-generator-advanced-example.component';
import { PlatformFormGeneratorLoadingExampleComponent } from './examples/loading/platform-form-generator-loading-example.component';
import { PlatformFormGeneratorCustomComponentExampleComponent } from './examples/platform-form-generator-custom-component-example.component';
import { PlatformFormGeneratorCustomErrorExampleComponent } from './examples/platform-form-generator-custom-error-example.component';
import { PlatformFormGeneratorCustomFieldLayoutExampleComponent } from './examples/platform-form-generator-custom-field-layout-example.component';
import { PlatformFormGeneratorExampleComponent } from './examples/platform-form-generator-example.component';
import { PlatformFormGeneratorFieldLayoutExampleComponent } from './examples/platform-form-generator-field-layout-example.component';
import { PlatformFormGeneratorGroupingExampleComponent } from './examples/platform-form-generator-grouping-example.component';
import { PlatformFormGeneratorInlineHelpExampleComponent } from './examples/platform-form-generator-inline-help-example.component';
import { PlatformFormGeneratorNoColonsExampleComponent } from './examples/platform-form-generator-no-colons-example.component';
import { PlatformFormGeneratorObservableExampleComponent } from './examples/platform-form-generator-observable-example.component';
import { PlatformFormGeneratorProgramaticSubmitComponent } from './examples/platform-form-generator-programatic-submit.component';

@Component({
    selector: 'app-form-generator',
    templateUrl: 'platform-form-generator-docs.component.html',
    imports: [
        DocsSectionTitleComponent,
        DescriptionComponent,
        ComponentExampleComponent,
        PlatformFormGeneratorExampleComponent,
        CodeExampleComponent,
        SeparatorComponent,
        PlatformFormGeneratorObservableExampleComponent,
        PlatformFormGeneratorCustomComponentExampleComponent,
        PlatformFormGeneratorProgramaticSubmitComponent,
        PlatformFormGeneratorCustomErrorExampleComponent,
        PlatformFormGeneratorFieldLayoutExampleComponent,
        PlatformFormGeneratorNoColonsExampleComponent,
        PlatformFormGeneratorGroupingExampleComponent,
        RouterLink,
        PlatformFormGeneratorCustomFieldLayoutExampleComponent,
        PlatformFormGeneratorInlineHelpExampleComponent,
        CodeSnippetComponent,
        PlatformFormGeneratorLoadingExampleComponent,
        PlatformFormGeneratorAdvancedExampleComponent,
        AsyncPipe
    ]
})
export class PlatformFormGeneratorDocsComponent {
    defaultFormGenerator: ExampleFile[] = [
        {
            language: 'html',
            code: getAssetFromModuleAssets(defaultFormGeneratorhtml),
            fileName: 'platform-form-generator-example'
        },
        {
            language: 'typescript',
            code: getAssetFromModuleAssets(defaultFormGeneratorSrc),
            fileName: 'platform-form-generator-example',
            component: 'PlatformFormGeneratorExampleComponent'
        }
    ];

    defaultObservableFormGenerator: ExampleFile[] = [
        {
            language: 'html',
            code: getAssetFromModuleAssets(defaultObservableFormGeneratorhtml),
            fileName: 'platform-form-generator-observable-example'
        },
        {
            language: 'typescript',
            code: getAssetFromModuleAssets(defaultObservableFormGeneratorSrc),
            fileName: 'platform-form-generator-observable-example',
            component: 'PlatformFormGeneratorObservableExampleComponent'
        }
    ];

    customFormGenerator: ExampleFile[] = [
        {
            language: 'html',
            code: getAssetFromModuleAssets(customFormGeneratorhtml),
            fileName: 'platform-form-generator-custom-component-example'
        },
        {
            language: 'typescript',
            code: getAssetFromModuleAssets(customFormGeneratorSrc),
            fileName: 'platform-form-generator-custom-component-example',
            component: 'PlatformFormGeneratorCustomComponentExampleComponent'
        }
    ];

    programaticSubmit: ExampleFile[] = [
        {
            language: 'html',
            code: getAssetFromModuleAssets(programaticSubmitHtml),
            fileName: 'platform-form-generator-programatic-submit'
        },
        {
            language: 'typescript',
            code: getAssetFromModuleAssets(programaticSubmitSrc),
            fileName: 'platform-form-generator-programatic-submit',
            component: 'PlatformFormGeneratorProgramaticSubmitComponent'
        }
    ];

    customErrors: ExampleFile[] = [
        {
            language: 'html',
            code: getAssetFromModuleAssets(customErrorsHtml),
            fileName: 'platform-form-generator-custom-error-example'
        },
        {
            language: 'typescript',
            code: getAssetFromModuleAssets(customErrorsSrc),
            fileName: 'platform-form-generator-custom-error-example',
            component: 'PlatformFormGeneratorCustomErrorExampleComponent'
        }
    ];

    formFieldLayoutGenerator: ExampleFile[] = [
        {
            language: 'html',
            code: getAssetFromModuleAssets(formFieldLayoutGeneratorhtml),
            fileName: 'platform-form-generator-field-layout-example'
        },
        {
            language: 'typescript',
            code: getAssetFromModuleAssets(formFieldLayoutGeneratorSrc),
            fileName: 'platform-form-generator-field-layout-example',
            component: 'PlatformFormGeneratorFieldLayoutExampleComponent'
        }
    ];

    noLabelColonsFiles: ExampleFile[] = [
        {
            language: 'html',
            code: getAssetFromModuleAssets(noColonsForLabelHtml),
            fileName: 'platform-form-generator-no-colons-example'
        },
        {
            language: 'typescript',
            code: getAssetFromModuleAssets(noColonsForLabelSrc),
            fileName: 'platform-form-generator-no-colons-example',
            component: 'PlatformFormGeneratorNoColonsExampleComponent'
        }
    ];

    groupingFiles: ExampleFile[] = [
        {
            language: 'html',
            code: getAssetFromModuleAssets(groupingHtml),
            fileName: 'platform-form-generator-grouping-example'
        },
        {
            language: 'typescript',
            code: getAssetFromModuleAssets(groupingSrc),
            fileName: 'platform-form-generator-grouping-example',
            component: 'PlatformFormGeneratorGroupingExampleComponent'
        }
    ];

    customLayoutFiles: ExampleFile[] = [
        {
            language: 'html',
            code: getAssetFromModuleAssets(customFieldLayoutHtml),
            fileName: 'platform-form-generator-custom-field-layout-example'
        },
        {
            language: 'typescript',
            code: getAssetFromModuleAssets(customFieldLayoutSrc),
            fileName: 'platform-form-generator-custom-field-layout-example',
            component: 'PlatformFormGeneratorCustomFieldLayoutExampleComponent'
        }
    ];

    inlineHelpFiles: ExampleFile[] = [
        {
            language: 'html',
            code: getAssetFromModuleAssets(inlineHelpHtml),
            fileName: 'platform-form-generator-inline-help-example'
        },
        {
            language: 'typescript',
            code: getAssetFromModuleAssets(inlineHelpSrc),
            fileName: 'platform-form-generator-inline-help-example',
            component: 'PlatformFormGeneratorInlineHelpExampleComponent'
        }
    ];

    loadingFormGenerator: ExampleFile[] = [
        {
            language: 'html',
            code: getAssetFromModuleAssets(loadingFormGeneratorhtml),
            fileName: 'platform-form-generator-loading-example'
        },
        {
            language: 'typescript',
            code: getAssetFromModuleAssets(loadingFormGeneratorSrc),
            fileName: 'platform-form-generator-loading-example',
            component: 'PlatformFormGeneratorLoadingExampleComponent'
        }
    ];

    advancedFormGenerator: ExampleFile[] = [
        getExampleFile('advanced/platform-form-generator-advanced-example.component.html'),
        getExampleFile('advanced/platform-form-generator-advanced-example.component.ts', {
            selector: 'platform-form-generator-advanced-example',
            component: 'PlatformFormGeneratorAdvancedExampleComponent'
        })
    ];

    defaultConfigExample = getAssetFromModuleAssets(defaultConfigSrc);
}
