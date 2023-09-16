const translationFiles = require('fast-glob').sync('libs/**/messagebundle_*.json');
const path = require('path');
const fs = require("fs");


translationFiles.forEach(file => {
    const parsedPath = path.parse(file);
    const dir = parsedPath.dir;
//     const base = parsedPath.base;
//     const name = parsedPath.name;
//     const ext = parsedPath.ext;
//     const content = fs.readFileSync(file, 'utf8');
//     const props = {};
//     content.split('\n').filter(Boolean).forEach(line => {
//         const [key, value] = line.split('=');
//         if (!value) {
//             debugger;
//         }
//         props[key] = value.substr(1, value.length - 2);
//     });
    fs.writeFileSync(path.join(dir, `index.ts`),
        `
export const i18n = {
    'sq-AL': () => import('./messagebundle_sq-AL.json').then((m => m.default)),
    'bg-BG': () => import('./messagebundle_bg-BG.json').then((m => m.default)),
    'zh-CN': () => import('./messagebundle_zh-CN.json').then((m => m.default)),
    'cs-CZ': () => import('./messagebundle_cs-CZ.json').then((m => m.default)),
    'en-US': () => import('./messagebundle_en-US.json').then((m => m.default)),
    'fr-FR': () => import('./messagebundle_fr-FR.json').then((m => m.default)),
    'ka-GE': () => import('./messagebundle_ka-GE.json').then((m => m.default)),
    'hi-IN': () => import('./messagebundle_hi-IN.json').then((m => m.default)),
    'it-IT': () => import('./messagebundle_it-IT.json').then((m => m.default)),
    'pl-PL': () => import('./messagebundle_pl-PL.json').then((m => m.default)),
    'ru-RU': () => import('./messagebundle_ru-RU.json').then((m => m.default)),
    'tr-TR': () => import('./messagebundle_tr-TR.json').then((m => m.default)),
    'uk-UA': () => import('./messagebundle_uk-UA.json').then((m => m.default))
};
    `
    );
});

console.log(translationFiles.length);

// translationFiles.forEach(file => fs.unlinkSync(file));
