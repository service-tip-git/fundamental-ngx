import { Tree } from '@nrwl/devkit';
import { getProjects } from "@nx/devkit";

export function flattenTranslations(
    translations: Record<string, any>,
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

const excludedProjects = new Set(['docs', 'docs-core', 'docs-cdk', 'docs-platform', 'docs-cx', 'docs-schema', 'docs-shared', 'docs-shared-pages', 'docs-i18n', 'docs-core-moment-datetime-adapter']);

export default async function (tree: Tree) {
    const projectsMap = getProjects(tree);
    const project = projectsMap.get('core-token');
    // eslint-disable-next-line @nx/enforce-module-boundaries
    const languages = await import('libs/i18n/src/lib/languages');
    const fdLanguageToLocaleName = languages.fdLanguageToLocaleName;
    const i18nKeys = ['coreToken', 'coreTokenizer'];

    for (const [fdName, localeName] of Object.entries(fdLanguageToLocaleName)) {
        const keys = i18nKeys.reduce((acc, key) => {
            acc[key] = languages[fdName][key];
            return acc;
        }, {});
        tree.write(`${project.root}/i18n/messagebundle_${localeName}.json`, JSON.stringify(flattenTranslations(keys), null, 2));
    }
    // const projects = projectsMap.entries();
    // // eslint-disable-next-line @nx/enforce-module-boundaries
    // const languages = await import('libs/i18n/src/lib/languages');
    // const fdLanguageToLocaleName = languages.fdLanguageToLocaleName;
    //
    // for (const [projectName, project] of projects) {
    //     if (projectName.startsWith('docs') && !excludedProjects.has(projectName) && !projectName.includes('schema')) {
    //         try {
    //             const { I18N_KEY } = await import(`${project.root}/index`);
    //             if (I18N_KEY) {
    //                 for (const [fdName, localeName] of Object.entries(fdLanguageToLocaleName)) {
    //                     const properties = Object.entries(flattenTranslations(languages[fdName][I18N_KEY], I18N_KEY))
    //                         .map(([key, value]) => `${key}="${value}"`).join('\n');
    //                     tree.write(`${project.root}/i18n/messagebundle_${localeName}.properties`, properties);
    //                 }
    //             }
    //         } catch (e) {
    //             console.log({ projectName, project });
    //         }
    //     }
    // }
}
