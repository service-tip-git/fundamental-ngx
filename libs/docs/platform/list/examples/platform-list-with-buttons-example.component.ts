import { Component } from '@angular/core';

import { ModifyItemEvent } from '@fundamental-ngx/platform/list';
import { StandardListItemModule } from '@fundamental-ngx/platform/list';
import { PlatformListModule } from '@fundamental-ngx/platform/list';

@Component({
    selector: 'fdp-platform-list-with-buttons-example',
    templateUrl: './platform-list-with-buttons-example.component.html',
    standalone: true,
    imports: [PlatformListModule, StandardListItemModule]
})
export class PlatformListWithButtonsExampleComponent {
    _modifyRow(event: ModifyItemEvent): void {
        const id = event.source.id;
        if (event.action === 'edit') {
            alert('Edit row --- ' + id);
        } else if (event.action === 'delete') {
            alert('Delete row ' + id);
        }
    }
}
