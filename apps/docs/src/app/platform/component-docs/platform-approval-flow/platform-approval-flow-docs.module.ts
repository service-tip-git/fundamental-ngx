import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FdDatetimeModule } from '@fundamental-ngx/core/datetime';
import { MultiInputModule } from '@fundamental-ngx/core/multi-input';
import { RtlService } from '@fundamental-ngx/core/utils';
import { PlatformApprovalFlowModule } from '@fundamental-ngx/platform/approval-flow';
import { MessageToastModule } from '@fundamental-ngx/core/message-toast';
import { API_FILES } from '../../api-files';
import { SharedDocumentationPageModule, ApiComponent } from '@fundamental-ngx/docs/common/shared-utils';
import { PlatformApprovalFlowHeaderComponent } from './platform-approval-flow-header/platform-approval-flow-header.component';
import { PlatformApprovalFlowDocsComponent } from './platform-approval-flow-docs.component';
import { PlatformApprovalFlowExampleComponent } from './platform-approval-flow-examples/platform-approval-flow-example.component';

const routes: Routes = [
    {
        path: '',
        component: PlatformApprovalFlowHeaderComponent,
        children: [
            { path: '', component: PlatformApprovalFlowDocsComponent },
            { path: 'api', component: ApiComponent, data: { content: API_FILES.approvalFlow } }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedDocumentationPageModule,
        PlatformApprovalFlowModule,
        FdDatetimeModule,
        MultiInputModule,
        MessageToastModule
    ],
    exports: [RouterModule],
    declarations: [
        PlatformApprovalFlowHeaderComponent,
        PlatformApprovalFlowDocsComponent,
        PlatformApprovalFlowExampleComponent
    ],
    providers: [RtlService]
})
export class PlatformApprovalFlowDocsModule {}
