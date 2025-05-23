import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FdpFormGroupModule, PlatformMultiInputModule } from '@fundamental-ngx/platform/form';
import { DATA_PROVIDERS } from '@fundamental-ngx/platform/shared';

@Component({
    selector: 'fdp-platform-multi-input-disabled',
    templateUrl: './platform-multi-input-disabled.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [{ provide: DATA_PROVIDERS, useValue: new Map() }],
    imports: [FdpFormGroupModule, PlatformMultiInputModule, FormsModule, ReactiveFormsModule]
})
export class PlatformMultiInputDisabledExampleComponent {}
