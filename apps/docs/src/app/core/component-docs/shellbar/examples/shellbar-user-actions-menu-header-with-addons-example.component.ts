import { Component } from '@angular/core';
import { ShellbarUser } from '@fundamental-ngx/core';

@Component({
    selector: 'fd-shellbar-user-actions-menu-header-with-addons-example',
    templateUrl: './shellbar-user-actions-menu-header-with-addons-example.component.html'
})
export class ShellbarUserActionsMenuHeaderWithAddonsExample {
    user: ShellbarUser = {
        fullName: 'John Doe',
        image: 'https://i.pravatar.cc/150?img=2',
        colorAccent: 1,
        role: 'User Experience Designer'
    };

    userMenuListItems = [
        { text: 'Settings', glyph: 'action-settings', callback: this._settingsCallback },
        { text: 'Contact', glyph: 'email' },
        { text: 'Sign Out', glyph: 'log', callback: this._signOutCallback }
    ];

    selectedUserActionItem(event: MouseEvent | KeyboardEvent): void {
        console.log('Selected item: ', event);
    }

    private _settingsCallback(event: MouseEvent | KeyboardEvent): void {
        console.log('Selected item: ', event);
        alert('Settings Clicked');
    }

    private _signOutCallback(event: MouseEvent | KeyboardEvent): void {
        console.log('Selected item: ', event);
        alert('Sign Out Clicked');
    }
}
