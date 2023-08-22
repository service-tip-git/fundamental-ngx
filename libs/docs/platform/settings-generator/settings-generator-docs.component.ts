import { Component } from '@angular/core';
import { ExampleFile, getAssetFromModuleAssets, getExampleFile } from '@fundamental-ngx/docs/shared';
import { CodeSnippetComponent } from '../../shared/src/lib/core-helpers/code-snippet/code-snippet.component';
import { NgIf, AsyncPipe } from '@angular/common';
import { SettingsGeneratorDialogExampleComponent } from './examples/dialog/settings-generator-dialog-example.component';
import { SettingsGeneratorCustomControlExampleComponent } from './examples/custom-control/settings-generator-custom-control-example.component';
import { SettingsGeneratorCustomLayoutExampleComponent } from './examples/custom-layout/settings-generator-custom-layout-example.component';
import { SettingsGeneratorMessagePopoverExampleComponent } from './examples/message-popover/settings-generator-message-popover-example.component';
import { SeparatorComponent } from '../../shared/src/lib/core-helpers/seperator/seperator.component';
import { CodeExampleComponent } from '../../shared/src/lib/core-helpers/code-example/code-example.component';
import { SettingsGeneratorDefaultExampleComponent } from './examples/default/settings-generator-default-example.component';
import { ComponentExampleComponent } from '../../shared/src/lib/core-helpers/component-example/component-example.component';
import { RouterLink } from '@angular/router';
import { DescriptionComponent } from '../../shared/src/lib/core-helpers/description/description';
import { DocsSectionTitleComponent } from '../../shared/src/lib/core-helpers/docs-section-title/docs-section-title.component';

@Component({
    selector: 'app-settings-generator',
    templateUrl: './settings-generator-docs.component.html',
    standalone: true,
    imports: [
        DocsSectionTitleComponent,
        DescriptionComponent,
        RouterLink,
        ComponentExampleComponent,
        SettingsGeneratorDefaultExampleComponent,
        CodeExampleComponent,
        SeparatorComponent,
        SettingsGeneratorMessagePopoverExampleComponent,
        SettingsGeneratorCustomLayoutExampleComponent,
        SettingsGeneratorCustomControlExampleComponent,
        SettingsGeneratorDialogExampleComponent,
        NgIf,
        CodeSnippetComponent,
        AsyncPipe
    ]
})
export class SettingsGeneratorDocsComponent {
    defaultConfigExample = getAssetFromModuleAssets('default/default-config.ts');
    settingsGeneratorDefaultExample: ExampleFile[] = [
        getExampleFile('default/settings-generator-default-example.component.html'),
        getExampleFile('default/settings-generator-default-example.component.ts')
    ];

    settingsGeneratorCustomControlExample: ExampleFile[] = [
        getExampleFile('custom-control/settings-generator-custom-control-example.component.html'),
        getExampleFile('custom-control/settings-generator-custom-control-example.component.ts')
    ];

    settingsGeneratorCustomLayoutExample: ExampleFile[] = [
        getExampleFile('custom-layout/settings-generator-custom-layout-example.component.html'),
        getExampleFile('custom-layout/settings-generator-custom-layout-example.component.ts')
    ];

    settingsGeneratorDialogLayoutExample: ExampleFile[] = [
        getExampleFile('dialog/settings-generator-dialog-example.component.html'),
        getExampleFile('dialog/settings-generator-dialog-example.component.ts')
    ];

    settingsGeneratorMessagePopoverLayoutExample: ExampleFile[] = [
        getExampleFile('message-popover/settings-generator-message-popover-example.component.html'),
        getExampleFile('message-popover/settings-generator-message-popover-example.component.ts')
    ];
}
