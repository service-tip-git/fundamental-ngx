import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { ActionSheetComponent } from '@fundamental-ngx/core/action-sheet';
import { MessageToastService } from '@fundamental-ngx/core/message-toast';
import { ButtonModule } from '@fundamental-ngx/core/button';
import { ActionSheetModule } from '@fundamental-ngx/core/action-sheet';

@Component({
    selector: 'fd-action-sheet-mobile-example',
    templateUrl: './action-sheet-mobile-example.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [ActionSheetModule, ButtonModule]
})
export class ActionSheetMobileExampleComponent {
    @ViewChild(ActionSheetComponent)
    actionSheetComponent: ActionSheetComponent;

    isOpen = false;

    constructor(private _messageToastService: MessageToastService) {}

    isOpenChange(isOpen: boolean): void {
        this.isOpen = isOpen;
    }

    actionPicked(action: string): void {
        this.openMessageToast(action);
        this.actionSheetComponent.close();
    }

    openMessageToast(action: string): void {
        const content = `${action} action performed`;
        this._messageToastService.open(content, {
            duration: 5000
        });
    }
}
