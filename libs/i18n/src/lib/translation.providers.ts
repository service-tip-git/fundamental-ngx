/* eslint-disable jsdoc/require-jsdoc */
import { FactorySansProvider, Provider, ValueProvider, ValueSansProvider } from '@angular/core';
import { CanBeAsyncFactory, TranslationData } from './translation.data';
import { TranslationService } from './translation.service';
import { DEFAULT_FD_TRANSLATIONS, FD_DEFAULT_LOCALE, FD_TRANSLATIONS } from './translation.tokens';

export function provideTranslator(
    translations?: CanBeAsyncFactory<TranslationData> | FactorySansProvider,
    defaultLocale?: string,
    defaultTranslations?: CanBeAsyncFactory<TranslationData> | FactorySansProvider
): Provider[] {
    return [
        TranslationService,
        translations ? provideTranslations(translations, false): [],
        defaultLocale ? provideLocale(defaultLocale) : [],
        defaultTranslations ? provideDefaultTranslations(defaultTranslations, false) : []
    ];
}

export function provideLocale(locale: string): ValueProvider {
    return {
        provide: FD_DEFAULT_LOCALE,
        useValue: locale
    };
}

export function provideTranslations(
    translations: CanBeAsyncFactory<TranslationData> | FactorySansProvider,
    withService: boolean = true
): Provider[] {
    return [
        withService ? [TranslationService] : [],
        {
            provide: FD_TRANSLATIONS,
            ...getPartialTranslationsProvider(translations)
        }
    ];
}

export function provideDefaultTranslations(
    translations: CanBeAsyncFactory<TranslationData> | FactorySansProvider,
    withService: boolean = true
): Provider[] {
    return [
        withService ? [TranslationService] : [],
        {
            provide: DEFAULT_FD_TRANSLATIONS,
            ...getPartialTranslationsProvider(translations)
        }
    ];
}

function isFactoryProvider(provider: any): provider is FactorySansProvider {
    return provider && provider.useFactory && typeof provider.useFactory === 'function';
}

export function getPartialTranslationsProvider(
    translations: CanBeAsyncFactory<TranslationData> | FactorySansProvider
): FactorySansProvider | ValueSansProvider {
    if (isFactoryProvider(translations)) {
        return translations;
    }
    return { useValue: translations };
}

export function componentDefaultTranslationsProvider(
    basePath: string,
    withService: boolean = true
): Provider[] {
    const locales = [
        'sq-AL',
        'bg-BG',
        'zh-CN',
        'cs-CZ',
        'en-US',
        'fr-FR',
        'ka-GE',
        'hi-IN',
        'it-IT',
        'pl-PL',
        'ru-RU',
        'tr-TR',
        'uk-UA'
    ];
    return provideDefaultTranslations(locales.reduce((acc, locale) => {
        acc[locale] = () => import(`${basePath}/messagebundle_${locale}.json`);
        return acc;
    }, {}), withService);
}
