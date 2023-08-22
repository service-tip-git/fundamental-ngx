import { Component } from '@angular/core';
import {
    DATE_TIME_FORMATS,
    DatetimeAdapter,
    FD_DATETIME_FORMATS,
    FdDate,
    FdDatetimeAdapter
} from '@fundamental-ngx/core/datetime';
import { DatePipe } from '@angular/common';
import { ButtonModule } from '@fundamental-ngx/core/button';
import { FormsModule } from '@angular/forms';
import { CalendarComponent } from '@fundamental-ngx/core/calendar';

@Component({
    selector: 'fd-calendar-programmatically-change-example',
    template: `
        <fd-calendar calType="single" [(ngModel)]="date"> </fd-calendar>
        <br />
        <div>Selected Date: {{ date.toDate() | date : 'shortDate' }}</div>
        <button fd-button label="Next Day" (click)="changeDay()"></button>
    `,
    styles: [
        `
            button {
                margin-top: 1rem;
            }
        `
    ],
    providers: [
        {
            provide: DatetimeAdapter,
            useClass: FdDatetimeAdapter
        },
        {
            provide: DATE_TIME_FORMATS,
            useValue: FD_DATETIME_FORMATS
        }
    ],
    standalone: true,
    imports: [CalendarComponent, FormsModule, ButtonModule, DatePipe]
})
export class CalendarProgrammaticallyChangeExampleComponent {
    date: FdDate = this.datetimeAdapter.today();

    constructor(private datetimeAdapter: DatetimeAdapter<FdDate>) {}

    public changeDay(): void {
        this.date = this.datetimeAdapter.addCalendarDays(this.date, 1);
    }
}
