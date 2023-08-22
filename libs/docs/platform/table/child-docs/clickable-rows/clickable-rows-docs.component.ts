import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExampleChildService, ExampleFile, getAssetFromModuleAssets } from '@fundamental-ngx/docs/shared';
import { PlatformTableActivableExampleComponent } from '../../examples/platform-table-activable-example.component';
import { PlatformTableNavigatableRowIndicatorExampleComponent } from '../../examples/platform-table-navigatable-row-indicator-example.component';
import { SeparatorComponent } from '../../../../shared/src/lib/core-helpers/seperator/seperator.component';
import { CodeExampleComponent } from '../../../../shared/src/lib/core-helpers/code-example/code-example.component';
import { ComponentExampleComponent } from '../../../../shared/src/lib/core-helpers/component-example/component-example.component';
import { DescriptionComponent } from '../../../../shared/src/lib/core-helpers/description/description';
import { DocsSectionTitleComponent } from '../../../../shared/src/lib/core-helpers/docs-section-title/docs-section-title.component';

const platformTableActivableRowSrc = 'platform-table-activable-example.component.html';
const platformTableActivableRowTsSrc = 'platform-table-activable-example.component.ts';

const platformTableNavigatableRowSrc = 'platform-table-navigatable-row-indicator-example.component.html';
const platformTableNavigatableRowTsSrc = 'platform-table-navigatable-row-indicator-example.component.ts';

@Component({
    selector: 'fd-clickable-rows-docs',
    templateUrl: './clickable-rows-docs.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        DocsSectionTitleComponent,
        DescriptionComponent,
        ComponentExampleComponent,
        PlatformTableActivableExampleComponent,
        CodeExampleComponent,
        SeparatorComponent,
        PlatformTableNavigatableRowIndicatorExampleComponent
    ]
})
export class ClickableRowsDocsComponent {
    childService = inject(ExampleChildService);
    route = inject(ActivatedRoute);
    navigatableRowFiles: ExampleFile[] = [
        {
            language: 'html',
            code: getAssetFromModuleAssets(platformTableNavigatableRowSrc),
            fileName: 'platform-table-navigatable-row-indicator-example',
            name: 'platform-table-navigatable-row-indicator-example.component.html'
        },
        {
            language: 'typescript',
            code: getAssetFromModuleAssets(platformTableNavigatableRowTsSrc),
            fileName: 'platform-table-navigatable-row-indicator-example',
            component: 'PlatformTableNavigatableRowIndicatorExampleComponent',
            name: 'platform-table-navigatable-row-indicator-example.component.ts'
        }
    ];

    activableRowFiles: ExampleFile[] = [
        {
            language: 'html',
            code: getAssetFromModuleAssets(platformTableActivableRowSrc),
            fileName: 'platform-table-activable-example',
            name: 'platform-table-activable-example.component.html'
        },
        {
            language: 'typescript',
            code: getAssetFromModuleAssets(platformTableActivableRowTsSrc),
            fileName: 'platform-table-activable-example',
            component: 'PlatformTableActivableExampleComponent',
            name: 'platform-table-activable-example.component.ts'
        }
    ];

    constructor() {
        this.childService.setLink(this.route.snapshot.routeConfig?.path);
    }
}
