import { FactoryProvider, inject } from '@angular/core';
import { cloneDeep, merge } from 'lodash-es';
import { BehaviorSubject } from 'rxjs';
import { FdLanguagePatch } from '../models';
import { FD_LOCALE_PATCHES } from "../translation.tokens";


class LocalePatchBehaviorSubject extends BehaviorSubject<FdLanguagePatch> {
    constructor(private parentPatch: BehaviorSubject<FdLanguagePatch>, patches: FdLanguagePatch = {}) {
        super(parentPatch.value);
        this.next(patches)
    }

    override next(value: FdLanguagePatch) {
        super.next(
            merge(cloneDeep(this.parentPatch.value), this.value, value)
        );
    }
}

/**
 * DI utility function, that allows to override `FD_LANGUAGE` injection token with part of the language object, that is used globally
 * @param languagePatch part of the language object to be overriden, or a function that returns such object and receives existing language as a parameter
 *
 * @example
 * ```typescript
 * import { patchLanguage } from '@fundamental-ngx/i18n';
 *
 * @Component({
 *    ...
 *    providers: [
 *         patchLanguage({
 *             // it's possible to partially override translations for component
 *             // overriding only 3 out of all translation strings for textarea here
 *             // also function can be used to provide complex translation logic
 *             platformTextarea: {
 *                 counterMessageCharactersRemainingSingular: 'You can type 1 more character',
 *                 counterMessageCharactersRemainingPlural: 'You can type {{ count }} more characters',
 *                 counterMessageCharactersOverTheLimitPlural: (params) => {
 *                      if (params.count === 3) {
 *                          return `You can type three more characters`;
 *                      }
 *                      return `You can type ${params.count} more characters`;
 *                 }
 *             }
 *         })
 *     ]
 * })
 * export class SomeComponent {}
 * ```
 */
export function patchLanguage(
    languagePatch: FdLanguagePatch
): FactoryProvider {
    return {
        provide: FD_LOCALE_PATCHES,
        useFactory: () => {
            const _parentPatches = inject(FD_LOCALE_PATCHES, { skipSelf: true, optional: true });
            return new LocalePatchBehaviorSubject(_parentPatches || new BehaviorSubject({}), languagePatch);
        }
    };
}
