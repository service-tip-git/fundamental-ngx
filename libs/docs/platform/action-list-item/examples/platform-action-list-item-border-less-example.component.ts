import { Component } from '@angular/core';

import { ContentDensityDirective } from '@fundamental-ngx/core/content-density';
import { ActionChangeEvent, ActionListItemModule, PlatformListModule } from '@fundamental-ngx/platform/list';

export interface Action {
    title: string;
}
@Component({
    selector: 'fdp-platform-action-list-item-border-less-example',
    templateUrl: './platform-action-list-item-border-less-example.component.html',
    imports: [PlatformListModule, ActionListItemModule, ContentDensityDirective]
})
export class PlatformActionListItemBorderLessExampleComponent {
    items: Action[] = [{ title: 'Action 1' }, { title: 'Action 2' }, { title: 'Action 3' }, { title: 'Action 4' }];

    _actionedRow($event: ActionChangeEvent): void {
        alert('invoked :' + $event.source.button.nativeElement.getAttribute('title'));
    }
}
