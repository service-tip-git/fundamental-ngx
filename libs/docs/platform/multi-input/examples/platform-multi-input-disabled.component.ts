import { ChangeDetectionStrategy, Component } from '@angular/core';

import { DATA_PROVIDERS } from '@fundamental-ngx/platform/shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlatformMultiInputModule } from '@fundamental-ngx/platform/form';
import { FdpFormGroupModule } from '@fundamental-ngx/platform/form';

@Component({
    selector: 'fdp-platform-multi-input-disabled',
    templateUrl: './platform-multi-input-disabled.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [{ provide: DATA_PROVIDERS, useValue: new Map() }],
    standalone: true,
    imports: [FdpFormGroupModule, PlatformMultiInputModule, FormsModule, ReactiveFormsModule]
})
export class PlatformMultiInputDisabledExampleComponent {}
