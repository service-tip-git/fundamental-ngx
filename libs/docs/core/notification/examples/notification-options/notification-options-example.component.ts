import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { ActionSheetComponent } from '@fundamental-ngx/core/action-sheet';
import { MessageToastService } from '@fundamental-ngx/core/message-toast';
import { ActionSheetModule } from '@fundamental-ngx/core/action-sheet';
import { MessageStripComponent } from '@fundamental-ngx/core/message-strip';
import { ButtonModule } from '@fundamental-ngx/core/button';
import { AvatarModule } from '@fundamental-ngx/core/avatar';
import { NotificationModule } from '@fundamental-ngx/core/notification';

@Component({
    selector: 'fd-notification-options-example',
    templateUrl: './notification-options-example.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NotificationModule, AvatarModule, ButtonModule, MessageStripComponent, ActionSheetModule]
})
export class NotificationOptionsExampleComponent {
    @ViewChild(ActionSheetComponent)
    actionSheetComponent: ActionSheetComponent;

    expanded = true;

    constructor(private _messageToastService: MessageToastService) {}

    actionPicked(action: string): void {
        this.openMessageToast(action);
        this.actionSheetComponent.close();
    }

    openMessageToast(action: string): void {
        const content = `${action} action performed`;
        this._messageToastService.open(content, {
            duration: 2000
        });
    }
}
