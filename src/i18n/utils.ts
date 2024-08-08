import { LANGUAGES, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
	const [, lang] = url.pathname.split('/');
	if (lang in LANGUAGES) return lang as keyof typeof LANGUAGES;
	return defaultLang;
}
