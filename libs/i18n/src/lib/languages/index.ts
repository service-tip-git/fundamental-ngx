export * from './albanian';
export * from './bulgarian';
export * from './chinese';
export * from './czech';
export * from './english';
export * from './french';
export * from './georgian';
export * from './hindi';
export * from './italian';
export * from './polish';
export * from './russian';
export * from './turkish';
export * from './ukrainian';

export const ngxLocaleToTranslations = {
    'sq-AL': () => import('./albanian').then((m) => m.FD_LANGUAGE_ALBANIAN),
    'bg-BG': () => import('./bulgarian').then((m) => m.FD_LANGUAGE_BULGARIAN),
    'zh-CN': () => import('./chinese').then((m) => m.FD_LANGUAGE_CHINESE),
    'cs-CZ': () => import('./czech').then((m) => m.FD_LANGUAGE_CZECH),
    'en-US': () => import('./english').then((m) => m.FD_LANGUAGE_ENGLISH),
    'fr-FR': () => import('./french').then((m) => m.FD_LANGUAGE_FRENCH),
    'ka-GE': () => import('./georgian').then((m) => m.FD_LANGUAGE_GEORGIAN),
    'hi-IN': () => import('./hindi').then((m) => m.FD_LANGUAGE_HINDI),
    'it-IT': () => import('./italian').then((m) => m.FD_LANGUAGE_ITALIAN),
    'pl-PL': () => import('./polish').then((m) => m.FD_LANGUAGE_POLISH),
    'ru-RU': () => import('./russian').then((m) => m.FD_LANGUAGE_RUSSIAN),
    'tr-TR': () => import('./turkish').then((m) => m.FD_LANGUAGE_TURKISH),
    'uk-UA': () => import('./ukrainian').then((m) => m.FD_LANGUAGE_UKRAINIAN)
};
