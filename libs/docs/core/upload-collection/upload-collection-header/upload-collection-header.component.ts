import { Component } from '@angular/core';
import { HeaderTabsComponent } from '../../../shared/src/lib/core-helpers/header-tabs/header-tabs.component';
import { ImportComponent } from '../../../shared/src/lib/core-helpers/import/import.component';
import { DescriptionComponent } from '../../../shared/src/lib/core-helpers/description/description';
import { HeaderComponent } from '../../../shared/src/lib/core-helpers/header/header.component';
import { DocPageComponent } from '../../../shared/src/lib/core-helpers/doc-page/doc-page.component';

@Component({
    selector: 'fd-upload-collection-header',
    templateUrl: './upload-collection-header.component.html',
    standalone: true,
    imports: [DocPageComponent, HeaderComponent, DescriptionComponent, ImportComponent, HeaderTabsComponent]
})
export class UploadCollectionHeaderComponent {}
