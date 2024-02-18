import { LANGUAGES, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');

    if (lang in LANGUAGES) return lang as keyof typeof LANGUAGES;

    return defaultLang;
}

export function useTranslations(lang: keyof typeof LANGUAGES) {
    return function t(key: keyof (typeof LANGUAGES)[typeof defaultLang]) {
        return LANGUAGES[lang][key] || LANGUAGES[defaultLang][key];
    };
}
