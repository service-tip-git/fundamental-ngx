import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
    FocusableGridDirective,
    FocusableItemDirective,
    FocusableItemPosition,
    FocusableListDirective,
    FocusableListPosition
} from '@fundamental-ngx/cdk/utils';

@Component({
    selector: 'fdk-focusable-grid-default-example',
    templateUrl: './default-example.component.html',
    styles: [
        `
            [fdkFocusableList] {
                display: flex;
            }

            [fdkFocusableItem] {
                flex-grow: 1;
                cursor: pointer;
                padding: 5px 7px;
                border: 1px dashed #dedede;
            }

            [fdkFocusableItem] a {
                margin: 0 0.25rem;
            }

            span[fdkFocusableItem] {
                display: inline-block;
            }

            [fdkFocusableItem]:focus,
            [fdkFocusableItem] *:focus {
                outline-color: var(--sapContent_FocusColor);
                outline-offset: -0.1875rem;
                outline-style: var(--sapContent_FocusStyle);
                outline-width: var(--sapContent_FocusWidth);
            }
        `
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [FocusableGridDirective, FocusableListDirective, FocusableItemDirective]
})
export class DefaultExampleComponent {
    constructor() {}

    itemFocused(position: FocusableItemPosition): void {
        console.log(position);
    }

    rowFocused(position: FocusableListPosition): void {
        console.log(position);
    }
}
