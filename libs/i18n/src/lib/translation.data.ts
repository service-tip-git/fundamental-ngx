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
    prefix: string | null = null
): Record<string, string> {
    if (!translations) {
        return {};
    }
    return Object.keys(translations).reduce((acc, key) => {
        const translationValue = translations[key];
        if (typeof translationValue === 'string' || typeof translationValue === 'function') {
            acc[prefix ? `${prefix}.${key}` : key] = translations[key];
        } else {
            Object.assign(acc, flattenTranslations(translationValue, prefix ? `${prefix}.${key}` : key));
        }
        return acc;
    }, {});
}
