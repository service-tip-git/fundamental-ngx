import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseDataProvider, MultiInputDataSource } from '@fundamental-ngx/platform/shared';

import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';
import { PlatformMultiInputModule } from '@fundamental-ngx/platform/form';
import { BusyIndicatorComponent } from '@fundamental-ngx/core/busy-indicator';
import { FdpFormGroupModule } from '@fundamental-ngx/platform/form';

const OPTIONS = [
    { state: 'Alabama', city: 'Montgomery' },
    { state: 'Alaska', city: 'Juneau' },
    { state: 'Arizona', city: 'Phoenix' },
    { state: 'Arkansas', city: 'Little Rock' },
    { state: 'California', city: 'Sacramento' },
    { state: 'Colorado', city: 'Denver' },
    { state: 'Connecticut', city: 'Hartford' },
    { state: 'Kentucky', city: 'Frankfort' },
    { state: 'Delaware', city: 'Dover' },
    { state: 'Florida', city: 'Tallahassee' },
    { state: 'Georgia', city: 'Atlanta' },
    { state: 'Hawaii', city: 'Honolulu' },
    { state: 'Idaho', city: 'Boise' },
    { state: 'Illinois', city: 'Springfield' },
    { state: 'Indiana', city: 'Indianapolis' },
    { state: 'Iowa', city: 'Des Moines' },
    { state: 'Kansas', city: 'Topeka' },
    { state: 'Kentucky', city: 'Frankfort' },
    { state: 'Louisiana', city: 'Baton Rouge' },
    { state: 'Maine', city: 'Augusta' },
    { state: 'Maryland', city: 'Annapolis' },
    { state: 'Massachusetts', city: 'Boston' },
    { state: 'Michigan', city: 'Lansing' },
    { state: 'Minnesota', city: 'St. Paul' },
    { state: 'Mississippi', city: 'Jackson' },
    { state: 'Missouri', city: 'Jefferson City' },
    { state: 'Montana', city: 'Helena' },
    { state: 'Nebraska', city: 'Lincoln' },
    { state: 'Nevada', city: 'Carson City' },
    { state: 'New Hampshire', city: 'Concord' },
    { state: 'New Jersey', city: 'Trenton' },
    { state: 'New Mexico', city: 'Santa Fe' },
    { state: 'New York', city: 'Albany' },
    { state: 'North Carolina', city: 'Raleigh' },
    { state: 'North Dakota', city: 'Bismarck' },
    { state: 'Ohio', city: 'Columbus' },
    { state: 'Oklahoma', city: 'Oklahoma City' },
    { state: 'Oregon', city: 'Salem' },
    { state: 'Pennsylvania', city: 'Harrisburg' },
    { state: 'Rhode Island', city: 'Providence' },
    { state: 'South Carolina', city: 'Columbia' },
    { state: 'South Dakota', city: 'Pierre' },
    { state: 'Tennessee', city: 'Nashville' },
    { state: 'Texas', city: 'Austin' },
    { state: 'Utah', city: 'Salt Lake City' },
    { state: 'Vermont', city: 'Montpelier' },
    { state: 'Virginia', city: 'Richmond' },
    { state: 'Washington', city: 'Olympia' },
    { state: 'West Virginia', city: 'Charleston' },
    { state: 'Wisconsin', city: 'Madison' },
    { state: 'Wyoming', city: 'Cheyenne' }
];

@Component({
    selector: 'fdp-platform-multi-input-loading-example',
    templateUrl: './platform-multi-input-loading-example.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [FdpFormGroupModule, BusyIndicatorComponent, PlatformMultiInputModule, FormsModule]
})
export class PlatformMultiInputLoadingExampleComponent {
    readonly dataSource = new MultiInputDataSource(new DelayedBaseDataProvider(OPTIONS));
    selected = [OPTIONS[0]];
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
