import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { BusyIndicatorComponent } from '@fundamental-ngx/core/busy-indicator';
import { FdpFormGroupModule, PlatformComboboxModule } from '@fundamental-ngx/platform/form';
import { BaseDataProvider, ComboBoxDataSource, DATA_PROVIDERS } from '@fundamental-ngx/platform/shared';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
    selector: 'fdp-combobox-loading-example',
    templateUrl: './combobox-loading-example.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [{ provide: DATA_PROVIDERS, useValue: new Map() }],
    imports: [FdpFormGroupModule, BusyIndicatorComponent, PlatformComboboxModule, FormsModule]
})
export class ComboboxLoadingExampleComponent {
    options = ['Apple', 'Banana', 'Pineapple', 'Strawberry', 'Broccoli', 'Carrot', 'Jalapeño', 'Spinach'];
    readonly dataSource = new ComboBoxDataSource(new DelayedBaseDataProvider(this.options));

    selectedItem = this.options[3];

    loading = false;

    onDataRequested(): void {
        this.loading = true;
    }
    onDataReceived(): void {
        this.loading = false;
    }
}

// Simulating real http request by adding 300ms delay to the DataProvider's "fetch" method
class DelayedBaseDataProvider<T> extends BaseDataProvider<T> {
    fetch(params: Map<string, any>): Observable<T[]> {
        return super.fetch(params).pipe(delay(300));
    }
}
