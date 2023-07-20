import { NgModule } from '@angular/core';
import { AvatarGroupComponent } from './avatar-group.component';
import { AvatarGroupItemDirective } from './directives/avatar-group-item.directive';
import { AvatarGroupOverflowButtonComponent } from './components/avatar-group-overflow-button.component';
import { AvatarGroupOverflowButtonDirective } from './directives/avatar-group-overflow-button.directive';
import { AvatarGroupOverflowBodyComponent } from './components/avatar-group-overflow-body/avatar-group-overflow-body.component';
import { AvatarGroupOverflowBodyDirective } from './directives/avatar-group-overflow-body.directive';

@NgModule({
    imports: [
        AvatarGroupComponent,
        AvatarGroupItemDirective,
        AvatarGroupOverflowButtonComponent,
        AvatarGroupOverflowButtonDirective,
        AvatarGroupOverflowBodyComponent,
        AvatarGroupOverflowBodyDirective
    ],
    exports: [
        AvatarGroupComponent,
        AvatarGroupItemDirective,
        AvatarGroupOverflowButtonComponent,
        AvatarGroupOverflowButtonDirective,
        AvatarGroupOverflowBodyComponent,
        AvatarGroupOverflowBodyDirective
    ]
})
export class AvatarGroupModule {}
