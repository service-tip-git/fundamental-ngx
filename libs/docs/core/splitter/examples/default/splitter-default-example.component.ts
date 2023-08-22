import { Component } from '@angular/core';

import { SplitterPaneResizeEvent } from '@fundamental-ngx/core/splitter';
import { SplitterModule } from '@fundamental-ngx/core/splitter';

@Component({
    selector: 'fd-slider-default-example',
    templateUrl: './splitter-default-example.component.html',
    standalone: true,
    imports: [SplitterModule]
})
export class SplitterDefaultExampleComponent {
    onResize(event: SplitterPaneResizeEvent[]): void {
        console.log(event);
    }
}
