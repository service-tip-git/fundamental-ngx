/* eslint-disable jsdoc/require-jsdoc */
import { inject, Injectable } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { IntlMessageFormat } from 'intl-messageformat';
import { BehaviorSubject, combineLatest, map, Observable, of, switchMap, tap } from 'rxjs';
import { FdLanguageKeyArgs, FdLanguageKeyFunction } from './models';
import {
    CanBeAsyncFactory,
    extractAsyncFactoryToObservable,
    flattenTranslations,
    LocaleTranslations,
    TranslationData
} from './translation.data';
import { DEFAULT_FD_TRANSLATIONS, FD_DEFAULT_LOCALE, FD_TRANSLATIONS } from './translation.tokens';

const _internalReferenceRegExp = /\{ ?@@\s*([^{}\s]*)\s* ?}/g;

@Injectable()
export class TranslationService {
    private _translations = inject(FD_TRANSLATIONS);
    private _defaultTranslations = inject(DEFAULT_FD_TRANSLATIONS);
    private _locale$ = new BehaviorSubject(inject(FD_DEFAULT_LOCALE));
    private _parentTranslationService: TranslationService | null = inject(TranslationService, {
        optional: true,
        skipSelf: true
    });

    private _localeData$ = this._getFlatLocaleData(this._translations);
    private _defaultLocaleData$ = this._getFlatLocaleData(this._defaultTranslations);
    private _effectiveLocaleData$: Observable<Record<string, string>> = this._defaultLocaleData$.pipe(
        switchMap((defaultLocaleData) =>
            this._localeData$.pipe(map((localeData) => ({ ...defaultLocaleData, ...localeData })))
        )
    );

    private _localeData: Record<string, string> = {};

    constructor() {
        this._effectiveLocaleData$
            .pipe(
                tap((r) => (this._localeData = r)),
                takeUntilDestroyed()
            )
            .subscribe();
    }

    translate(key: string, context: Record<string, any> = {}): string {
        console.log(this);
        const raw = this.resolveRaw(key);
        const val = typeof raw === 'string' ? raw : raw(context);
        if (val.includes('{')) {
            return this._interpolate(val, context);
        }
        return val;
    }

    translate$(key: string, context: Record<string, any> = {}): Observable<string> {
        return this.resolveRaw$(key).pipe(
            map((raw) => {
                const val = typeof raw === 'string' ? raw : raw(context);
                if (val.includes('{')) {
                    return this._interpolate(val, context);
                }
                return val;
            })
        );
    }

    resolveRaw(key: string): string | FdLanguageKeyFunction {
        let val: string | FdLanguageKeyFunction = key;
        if (!this._localeData) {
            console.warn(`Translation data was not loaded yet and key "${key}" was requested`);
            return key;
        }
        if (this._localeData[key]) {
            val = this._localeData[key];
        } else if (this._parentTranslationService) {
            val = this._parentTranslationService.resolveRaw(key);
        }
        if (val === key) {
            console.warn(`Translation key "${key}" not found`);
        }
        if (typeof val !== 'string') {
            return val;
        }
        const internalReferences = val.match(_internalReferenceRegExp);
        if (internalReferences) {
            const replacements = internalReferences.map((internalReference) => {
                const internalReferenceKey = internalReference.replace(_internalReferenceRegExp, '$1');
                const replacementValue = this.resolveRaw(internalReferenceKey);
                return [internalReference, replacementValue];
            }) as Array<[string, string | FdLanguageKeyFunction]>;
            if (replacements.some((repl) => typeof repl[1] !== 'string')) {
                return (ctx: FdLanguageKeyArgs) => {
                    let returnVal = val as string;
                    for (const [internalReference, replacementValue] of replacements) {
                        if (typeof replacementValue === 'string') {
                            returnVal = returnVal.split(internalReference).join(replacementValue);
                        } else {
                            returnVal = returnVal.replace(new RegExp(internalReference, 'g'), () =>
                                replacementValue(ctx)
                            );
                        }
                    }
                    return returnVal;
                };
            }
            (replacements as Array<[string, string]>).forEach(([internalReference, replacementValue]) => {
                val = (val as string).split(internalReference).join(replacementValue);
            });
        }
        return val;
    }

    resolveRaw$(key: string): Observable<string | FdLanguageKeyFunction> {
        return this._effectiveLocaleData$.pipe(
            switchMap((localeData) => {
                let val$: Observable<string | FdLanguageKeyFunction> = of(key);

                if (localeData[key]) {
                    val$ = of(localeData[key]);
                } else if (this._parentTranslationService) {
                    val$ = this._parentTranslationService.resolveRaw$(key);
                }
                return val$.pipe(
                    tap((val) => val === key && console.warn(`Translation key "${key}" not found`)),
                    switchMap((val) => {
                        if (typeof val !== 'string') {
                            return of(val);
                        }
                        const internalReferences = val.match(_internalReferenceRegExp);
                        if (internalReferences) {
                            return combineLatest(
                                internalReferences.map((internalReference) => {
                                    const internalReferenceKey = internalReference.replace(
                                        _internalReferenceRegExp,
                                        '$1'
                                    );
                                    return this.resolveRaw$(internalReferenceKey).pipe(
                                        map((replacementValue) => [internalReference, replacementValue])
                                    );
                                }) as Observable<[string, string | FdLanguageKeyFunction]>[]
                            ).pipe(
                                map((replacements) => {
                                    if (replacements.some((repl) => typeof repl[1] !== 'string')) {
                                        return (ctx: FdLanguageKeyArgs) => {
                                            let returnVal = val as string;
                                            for (const [internalReference, replacementValue] of replacements) {
                                                if (typeof replacementValue === 'string') {
                                                    returnVal = returnVal
                                                        .split(internalReference)
                                                        .join(replacementValue);
                                                } else {
                                                    returnVal = returnVal.replace(
                                                        new RegExp(internalReference, 'g'),
                                                        () => replacementValue(ctx)
                                                    );
                                                }
                                            }
                                            return returnVal;
                                        };
                                    }
                                    (replacements as Array<[string, string]>).forEach(
                                        ([internalReference, replacementValue]) => {
                                            val = (val as string).split(internalReference).join(replacementValue);
                                        }
                                    );
                                    return val;
                                })
                            );
                        }
                        return of(val);
                    })
                );
            })
        );
    }

    private _getLocaleTranslations = (
        locale: string,
        translations: CanBeAsyncFactory<TranslationData>
    ): Observable<CanBeAsyncFactory<LocaleTranslations>> =>
        extractAsyncFactoryToObservable(translations).pipe(map((translationData) => translationData[locale]));

    private _getFlatLocaleData(_translations: CanBeAsyncFactory<TranslationData>): Observable<Record<string, string>> {
        return this._locale$.pipe(
            switchMap((locale) => this._getLocaleTranslations(locale, _translations)),
            switchMap((localeTranslations) => extractAsyncFactoryToObservable(localeTranslations)),
            map((t) => flattenTranslations(t))
        );
    }

    private _interpolate(raw: string, context: Record<string, any>): string {
        return new IntlMessageFormat(raw, this._locale$.getValue()).format(context);
    }
}
