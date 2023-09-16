import { inject, InjectionToken, LOCALE_ID } from '@angular/core';
import { CanBeAsyncFactory, LocaleTranslations, TranslationData } from './translation.data';
import { BehaviorSubject } from "rxjs";

export const FD_TRANSLATIONS = new InjectionToken<CanBeAsyncFactory<TranslationData>>('Translations', {
    factory: () => ({})
});
export const DEFAULT_FD_TRANSLATIONS = new InjectionToken<CanBeAsyncFactory<TranslationData>>('Default translations', {
    factory: () => ({})
});
export const FD_DEFAULT_LOCALE = new InjectionToken<string>('Default locale', { factory: () => inject(LOCALE_ID) });

export const FD_LOCALE_PATCHES = new InjectionToken<BehaviorSubject<LocaleTranslations>>('Locale patches', {
    factory: () => new BehaviorSubject({})
});
