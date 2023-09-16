import { Directive, inject, Input } from '@angular/core';
import { TranslationService } from "../translation.service";
import { flattenTranslations, LocaleTranslations } from "../translation.data";

@Directive({
    selector: '[fdPatchLanguage]',
    standalone: true
})
export class FdPatchLanguageDirective {
    /** part of the language object to be overriden */
    @Input('fdPatchLanguage') set languagePatch(value: LocaleTranslations) {
        this._translationService.patchLocale(flattenTranslations(value))
    }

    private _translationService = inject(TranslationService);
}
