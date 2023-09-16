import { ChangeDetectorRef, DestroyRef, inject, Pipe, PipeTransform } from '@angular/core';
import { filter, Subscription } from 'rxjs';

import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FdLanguageKeyArgs } from '../models/lang';
import { TranslationService } from '../translation.service';
import deepEqual from 'fast-deep-equal';

@Pipe({
    name: 'fdTranslate',
    pure: false, // required to update the value when the observable is resolved
    standalone: true
})
export class FdTranslatePipe implements PipeTransform {
    /** @hidden */
    private _value: string;

    /** @hidden */
    private _translationService = inject(TranslationService);

    /** @hidden */
    private _subscription: Subscription;

    /** @hidden */
    private readonly _destroyRef: DestroyRef = inject(DestroyRef);

    /** @hidden */
    private _cdr: ChangeDetectorRef = inject(ChangeDetectorRef);

    /** @hidden */
    private _previousKey: string;
    private _previousArgs: FdLanguageKeyArgs | Record<string, any>;

    /** Translate a key with arguments and, optionally, default value */
    transform(key: string, args: FdLanguageKeyArgs | Record<string, any> = {}, defaultValue = ''): string {
        if (this._previousKey !== key || !deepEqual(this._previousArgs, args)) {
            this._previousKey = key;
            this._previousArgs = args;
            if (this._subscription) {
                this._subscription.unsubscribe();
            }
            this._subscription = this._translationService
                .translate$(key, args)
                .pipe(
                    filter((value) => value !== this._value),
                    takeUntilDestroyed(this._destroyRef)
                )
                .subscribe((value) => {
                    this._value = value;
                    this._cdr.markForCheck();
                });
        }

        return this._value === key ? defaultValue : this._value;
    }
}
