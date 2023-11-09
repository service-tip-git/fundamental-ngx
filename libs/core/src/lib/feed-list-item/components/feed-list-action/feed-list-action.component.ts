import { Directive } from '@angular/core';

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: 'fd-feed-list-action',
    host: { class: 'fd-feed-list__actions' },
    standalone: true
})
// eslint-disable-next-line @angular-eslint/directive-class-suffix
export class FeedListActionComponent {}
