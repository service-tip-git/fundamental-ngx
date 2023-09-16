/* eslint-disable jsdoc/require-jsdoc */
import { inject, Injectable, isDevMode } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { IntlMessageFormat } from 'intl-messageformat';
import { BehaviorSubject, combineLatest, map, Observable, of, switchMap, tap } from 'rxjs';
import { FdLanguageKeyArgs, FdLanguageKeyFunction } from './models';
import {
    CanBeAsyncFactory,
    extractAsyncFactoryToObservable,
    flattenTranslations, LocaleTranslations,
    replaceDoubleCurlyBraces,
    TranslationData
} from './translation.data';
import { DEFAULT_FD_TRANSLATIONS, FD_DEFAULT_LOCALE, FD_LOCALE_PATCHES, FD_TRANSLATIONS } from './translation.tokens';
import { FD_LANGUAGE } from "./utils";

const _internalReferenceRegExp = /\{ ?@@\s*([^{}\s]*)\s* ?}/g;

@Injectable()
export class TranslationService {
    _locale$: BehaviorSubject<string>;
    private _translations = inject(FD_TRANSLATIONS);
    private _defaultTranslations = inject(DEFAULT_FD_TRANSLATIONS);
    private _deprecatedFdLanguage$ = inject(FD_LANGUAGE).pipe(
        map(fdLanguage => flattenTranslations(fdLanguage as unknown as LocaleTranslations, null, replaceDoubleCurlyBraces))
    );
    private _parentTranslationService: TranslationService | null = inject(TranslationService, {
        optional: true,
        skipSelf: true
    });

    private _localeData$: Observable<Record<string, string | FdLanguageKeyFunction>>;
    private _defaultLocaleData$: Observable<Record<string, string | FdLanguageKeyFunction>>;

    private _deprecatedFdLanguage: Record<string, string | FdLanguageKeyFunction> = {};

    private _patches$ = inject(FD_LOCALE_PATCHES);

    private _localeData: Record<string, string | FdLanguageKeyFunction> = {};
    private _defaultLocaleData: Record<string, string | FdLanguageKeyFunction> = {};
    private _flattenedPatches$ = this._patches$.pipe(
        map((patches) => flattenTranslations(patches, null, replaceDoubleCurlyBraces))
    )
    patches: Record<string, string | FdLanguageKeyFunction> = {};

    constructor() {
        this._locale$ = this._parentTranslationService?._locale$ ?? new BehaviorSubject(inject(FD_DEFAULT_LOCALE));
        this._localeData$ = this.extractLocaleData(this._translations);
        this._defaultLocaleData$ = this.extractLocaleData(this._defaultTranslations);
        combineLatest([
            this._localeData$,
            this._defaultLocaleData$,
            this._deprecatedFdLanguage$,
            this._flattenedPatches$
        ])
            .pipe(takeUntilDestroyed())
            .subscribe(
                ([localeData, defaultLocaleData, deprecatedFdLanguage, patches]) => {
                    this._localeData = localeData;
                    this._defaultLocaleData = defaultLocaleData;
                    this._deprecatedFdLanguage = deprecatedFdLanguage;
                    this.patches = patches;
                }
            );
    }

    patchLocale(patch: Record<string, string | FdLanguageKeyFunction>): void {
        this._patches$.next(patch);
    }

    setLocale(locale: string): void {
        if (this._parentTranslationService?.setLocale(locale)) {
            return;
        }
        this._locale$.next(locale);
    }

    getLocale(): string {
        return this._locale$.getValue();
    }

    translate(key: string, context: Record<string, any> = {}): string {
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
        let val: string | FdLanguageKeyFunction = this._resolveRawLocally(
            key,
            {
                patches: this.patches,
                localeData: this._localeData,
                defaultLocaleData: this._defaultLocaleData,
                deprecatedFdLanguage: this._deprecatedFdLanguage
            }
        );
        // Not found locally, try parent
        if (val === key) {
            val = this._parentTranslationService?.resolveRaw(key) || val;
            if (val === key && isDevMode()) {
                console.warn(`Translation key "${key}" not found`);
            }
        }
        if (typeof val !== 'string') {
            return val;
        }
        const internalReferences = val.match(_internalReferenceRegExp);
        if (internalReferences) {
            const replacements: Array<[string, string | FdLanguageKeyFunction]> = internalReferences.map((internalReference) => {
                const internalReferenceKey = internalReference.replace(_internalReferenceRegExp, '$1');
                const replacementValue = this.resolveRaw(internalReferenceKey);
                return [internalReference, replacementValue];
            });
            return this._getFinalRaw(val, replacements);
        }
        return val;
    }

    resolveRaw$(key: string): Observable<string | FdLanguageKeyFunction> {
        return combineLatest([
            this._flattenedPatches$,
            this._localeData$,
            this._defaultLocaleData$,
            this._deprecatedFdLanguage$
        ]).pipe(
            switchMap(([patches, localeData, defaultLocaleData, deprecatedFdLanguage]) => {
                let val: string | FdLanguageKeyFunction = this._resolveRawLocally(
                    key,
                    {
                        patches,
                        localeData,
                        defaultLocaleData,
                        deprecatedFdLanguage
                    }
                );
                if (val !== key) {
                    return of(val);
                }
                return this._parentTranslationService?.resolveRaw$(key) || of(val);
            }),
            tap((v) => {
                if (v === key && isDevMode()) {
                    console.warn(`Translation key "${key}" not found`);
                }
            }),
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
                        map((replacements) => this._getFinalRaw(val, replacements))
                    );
                }
                return of(val);
            })
        )
    }

    private _resolveRawLocally(key: string, collections: {
        patches: Record<string, string | FdLanguageKeyFunction>,
        localeData: Record<string, string | FdLanguageKeyFunction>,
        defaultLocaleData: Record<string, string | FdLanguageKeyFunction>,
        deprecatedFdLanguage: Record<string, string | FdLanguageKeyFunction>
    }): string | FdLanguageKeyFunction {
        let val: string | FdLanguageKeyFunction = key;
        if (collections.patches[key]) {
            val = collections.patches[key];
        } else if (collections.localeData[key]) {
            val = collections.localeData[key];
        } else if (collections.defaultLocaleData[key]) {
            val = collections.defaultLocaleData[key];
        } else if (collections.deprecatedFdLanguage[key]) {
            if (isDevMode()) {
                console.warn(`Translation key "${key}" was found in deprecated language object but not in the new one`);
            }
            val = collections.deprecatedFdLanguage[key];
        }
        return val;
    }

    private extractLocaleData(translationData: CanBeAsyncFactory<TranslationData>): Observable<Record<string, string | FdLanguageKeyFunction>> {
        return extractAsyncFactoryToObservable(translationData)
            .pipe(
                switchMap((translationData) => this._locale$.pipe(
                    switchMap((locale) => extractAsyncFactoryToObservable(translationData[locale] || {} as Record<string, string | FdLanguageKeyFunction>))
                )),
                map((localeData) => flattenTranslations(localeData))
            )
    }

    private _interpolate(raw: string, context: Record<string, any>): string {
        return new IntlMessageFormat(raw, this._locale$.getValue()).format(context);
    }

    private _getFinalRaw(rawString: string, replacements: Array<[string, string | FdLanguageKeyFunction]> = []): string | FdLanguageKeyFunction {
        if (replacements.some((repl) => typeof repl[1] !== 'string')) {
            return (ctx: FdLanguageKeyArgs) => {
                let returnVal = rawString;
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
        (replacements as Array<[string, string]>).forEach(([internalReference, replacementValue]) => {
            rawString = rawString.split(internalReference).join(replacementValue);
        });
        return rawString;
    }
}
