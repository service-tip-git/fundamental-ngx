import { Component } from '@angular/core';
import { RouterLinkActive, RouterLink, RouterOutlet } from '@angular/router';
import { ContentDensityDirective } from '@fundamental-ngx/core/content-density';
import { TabsModule } from '@fundamental-ngx/core/tabs';
import { FormLabelModule } from '@fundamental-ngx/core/form';

@Component({
    selector: 'fd-tab-filter-example',
    templateUrl: './tab-filter-example.component.html',
    standalone: true,
    imports: [FormLabelModule, TabsModule, ContentDensityDirective, RouterLinkActive, RouterLink, RouterOutlet]
})
export class TabFilterExampleComponent {}
