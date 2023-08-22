import { Component } from '@angular/core';
import { HeaderTabsComponent } from '../../../shared/src/lib/core-helpers/header-tabs/header-tabs.component';
import { ImportComponent } from '../../../shared/src/lib/core-helpers/import/import.component';
import { HeaderComponent } from '../../../shared/src/lib/core-helpers/header/header.component';
import { DocPageComponent } from '../../../shared/src/lib/core-helpers/doc-page/doc-page.component';

@Component({
    selector: 'fd-micro-process-flow-header',
    templateUrl: './micro-process-flow-header.component.html',
    standalone: true,
    imports: [DocPageComponent, HeaderComponent, ImportComponent, HeaderTabsComponent]
})
export class MicroProcessFlowHeaderComponent {}
