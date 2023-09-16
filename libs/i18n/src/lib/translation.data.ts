/* eslint-disable jsdoc/require-jsdoc,@nx/enforce-module-boundaries */
import { isPromise } from '@fundamental-ngx/cdk/utils';
import { from, isObservable, Observable } from 'rxjs';
import { FdLanguageKeyFunction } from './models';

type LocaleName = string;

export type CanBeAsync<T> = T | Observable<T> | Promise<T>;

export type CanBeFactory<T> = T | (() => T);

export type CanBeAsyncFactory<T> = CanBeFactory<CanBeAsync<T>>;

export interface LocaleTranslations {
    [key: string]: LocaleTranslations | string | FdLanguageKeyFunction;
}

export interface TranslationData {
    [key: LocaleName]: CanBeAsyncFactory<LocaleTranslations>;
}

export function extractFactory<T>(p: CanBeFactory<T>): T {
    if (typeof p === 'function') {
        return (p as () => T)();
    }
    return p;
}

export function extractAsyncToObservable<T>(p: CanBeAsync<T>): Observable<T> {
    if (isObservable(p)) {
        return p;
    }
    if (isPromise(p)) {
        return from(p);
    }
    return from([p]);
}

export function extractAsyncFactoryToObservable<T>(p: CanBeAsyncFactory<T>): Observable<T> {
    return extractAsyncToObservable(extractFactory(p));
}

export function flattenTranslations(
    translations: LocaleTranslations,
    prefix: string | null = null,
    translationValueTransformer?: (value: string | FdLanguageKeyFunction) => string | FdLanguageKeyFunction
): Record<string, string | FdLanguageKeyFunction> {
    if (!translations) {
        return {};
    }
    return Object.keys(translations).reduce((acc: Record<string, string | FdLanguageKeyFunction>, key) => {
        const translationValue = translations[key];
        const globalKey = prefix ? `${prefix}.${key}` : key;
        if (typeof translationValue === 'string' || typeof translationValue === 'function') {
            acc[globalKey] = translationValueTransformer ? translationValueTransformer(translationValue) : translationValue;
        } else {
            Object.assign(acc, flattenTranslations(translationValue, globalKey, translationValueTransformer));
        }
        return acc;
    }, {});
}

export function replaceDoubleCurlyBraces(input: string | FdLanguageKeyFunction): string | FdLanguageKeyFunction {
    if (typeof input !== 'string') {
        return input;
    }
    // Regular expression to find and replace double curly braces
    const regex = /{{\s*([^{}]+?)\s*}}/g;

    // Use a callback function to preserve ICU expressions
    return input.replace(regex, (_match, group) => {
        return `{${group}}`;
    });
}
