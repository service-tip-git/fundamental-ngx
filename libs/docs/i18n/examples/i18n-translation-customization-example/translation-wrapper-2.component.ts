import { ChangeDetectionStrategy, Component } from '@angular/core';
import { patchLanguage } from '@fundamental-ngx/i18n';
import { PlatformTextAreaModule } from '@fundamental-ngx/platform/form';
import { FormLabelModule } from '@fundamental-ngx/core/form';

@Component({
    selector: 'app-translation-wrapper-2',
    template: `
        <label fd-form-label for="textarea-customized-translation-2"
            >Textarea with translation overrides using host component</label
        >
        <fdp-textarea
            [id]="'textarea-customized-translation-2'"
            name="textarea-customized-translation-2"
            [maxLength]="10"
            [showExceededText]="true"
        >
        </fdp-textarea>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        patchLanguage({
            platformTextarea: {
                counterMessageCharactersOverTheLimitSingular: '1 Zeichen über dem Limit',
                counterMessageCharactersOverTheLimitPlural: '{{ count }} Zeichen über dem Limit',
                counterMessageCharactersRemainingSingular: '1 Zeichen übrig',
                counterMessageCharactersRemainingPlural: '{{ count }} Zeichen übrig'
            }
        })
    ],
    standalone: true,
    imports: [FormLabelModule, PlatformTextAreaModule]
})
export class TranslationWrapper2Component {}
