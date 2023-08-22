import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DynamicSideContentModule } from '@fundamental-ngx/core/dynamic-side-content';

@Component({
    selector: 'fd-dynamic-side-content-basic-example',
    templateUrl: './dynamic-side-content-basic-example.component.html',
    styleUrls: ['./dynamic-side-content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [DynamicSideContentModule]
})
export class DynamicSideContentBasicExampleComponent {}
