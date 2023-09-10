import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemingService } from '@fundamental-ngx/core/theming';
import { TranslationService, provideTranslations } from '@fundamental-ngx/i18n';

@Component({
    selector: 'app-root',
    template: ` <router-outlet></router-outlet>`,
    imports: [RouterOutlet],
    standalone: true,
    providers: [
        provideTranslations({
            'en-US': {
                hello: 'Hello {someVariable}{@@test4}',
                withParams:
                    '{ count, plural, =0 {You have no messages.} =1 {You have one message.} other {You have {count} messages.}}'
            }
        })
    ]
})
export class AppComponent implements OnInit {
    /** @hidden */
    constructor(private readonly _themingService: ThemingService, private translationService: TranslationService) {
        this.translationService.translate('withParams', { count: 10 });
    }

    /** @hidden */
    ngOnInit(): void {
        this._themingService.init();
    }
}
