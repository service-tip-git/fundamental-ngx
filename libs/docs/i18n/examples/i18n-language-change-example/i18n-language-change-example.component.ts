import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FdLanguage, FD_LANGUAGE, FD_LANGUAGE_ENGLISH, FD_LANGUAGE_UKRAINIAN } from '@fundamental-ngx/i18n';
import { BehaviorSubject } from 'rxjs';
import { PlatformTextAreaModule } from '@fundamental-ngx/platform/form';
import { FormLabelModule } from '@fundamental-ngx/core/form';
import { ButtonModule } from '@fundamental-ngx/core/button';
import { FormsModule } from '@angular/forms';
import { SegmentedButtonModule } from '@fundamental-ngx/core/segmented-button';

@Component({
    selector: 'app-language-change-example',
    templateUrl: './i18n-language-change-example.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: FD_LANGUAGE,
            useValue: new BehaviorSubject(FD_LANGUAGE_ENGLISH)
        }
    ],
    standalone: true,
    imports: [SegmentedButtonModule, FormsModule, ButtonModule, FormLabelModule, PlatformTextAreaModule]
})
export class PlatformLanguageChangeExampleComponent {
    lang = 'en';

    constructor(@Inject(FD_LANGUAGE) private langSubject$: BehaviorSubject<FdLanguage>) {}

    changeLanguage(lang: 'custom' | 'en' | 'ua'): void {
        switch (lang) {
            case 'en':
                this.langSubject$.next(FD_LANGUAGE_ENGLISH);
                break;
            case 'ua':
                this.langSubject$.next(FD_LANGUAGE_UKRAINIAN);
                break;
            case 'custom': {
                // modify all values of existing English dictionary
                const custom = this.createObjectFromEntries(
                    Object.entries(FD_LANGUAGE_ENGLISH).map(([comp, keys]) => {
                        const modified = Object.entries(keys).map(
                            ([key, value]) => [key, 'Custom: ' + value] as [string, string]
                        );
                        return [comp, this.createObjectFromEntries(modified)];
                    })
                ) as any;
                this.langSubject$.next(custom);
                break;
            }
        }
    }

    private createObjectFromEntries(entries: [key: string, value: any][]): Record<string, any> {
        return entries.reduce((acc, [key, value]) => {
            acc[key] = value;
            return acc;
        }, {});
    }
}
