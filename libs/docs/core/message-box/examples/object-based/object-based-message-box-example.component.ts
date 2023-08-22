import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

import { MessageBoxContent, MessageBoxService } from '@fundamental-ngx/core/message-box';
import { ButtonModule } from '@fundamental-ngx/core/button';

@Component({
    selector: 'fd-object-based-message-box-example',
    templateUrl: './object-based-message-box-example.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        // The MessageBoxService is already provided on the MessageBoxModule module.
        // We do it at the component level here, due to the limitations of our example generation script.
        MessageBoxService
    ],
    standalone: true,
    imports: [ButtonModule]
})
export class ObjectBasedMessageBoxExampleComponent {
    title = 'Fruit facts';
    content = 'Strawberries have more vitamin C than oranges.';
    closeReason = '';

    constructor(private _messageBoxService: MessageBoxService, private _cdr: ChangeDetectorRef) {}

    open(): void {
        const content: MessageBoxContent = {
            title: this.title,
            content: this.content,
            approveButton: 'Ok',
            cancelButton: 'Cancel',
            approveButtonCallback: () => messageBoxRef.close('Approved'),
            cancelButtonCallback: () => messageBoxRef.close('Canceled'),
            closeButtonCallback: () => messageBoxRef.dismiss('Dismissed')
        };

        const messageBoxRef = this._messageBoxService.open(content, {
            ariaLabelledBy: 'fd-message-box-object-based-header fd-message-box-object-based-body'
        });

        messageBoxRef.afterClosed.subscribe(
            (result) => {
                this.closeReason = 'Message box closed with result: ' + result;
                this._cdr.detectChanges();
            },
            (error) => {
                this.closeReason = 'Message box dismissed with result: ' + error;
                this._cdr.detectChanges();
            }
        );
    }
}
