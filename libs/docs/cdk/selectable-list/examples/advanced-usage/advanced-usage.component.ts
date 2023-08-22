import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CustomSelectableItemDirective } from './custom-selectable-item.directive';
import { SelectableItemDirective } from '@fundamental-ngx/cdk/utils';
import { NgFor } from '@angular/common';
import { SelectableListDirective } from '@fundamental-ngx/cdk/utils';

@Component({
    selector: 'fundamental-ngx-selectable-list-advanced-usage',
    templateUrl: './advanced-usage.component.html',
    styles: [
        `
            [fdkSelectableList] {
                border: 1px dashed #dedede;
            }

            [fdkSelectableItem] {
                cursor: pointer;
            }

            [fdkSelectableItem].item-is-selected {
                background-color: #dedede;
            }
        `
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [SelectableListDirective, NgFor, SelectableItemDirective, CustomSelectableItemDirective]
})
export class AdvancedUsageComponent {
    items = [1, 2, 3, 4, 5];

    constructor() {}
}
