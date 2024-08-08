import { SpainFlag, UnitedStatesFlag } from '../icons/index';

export const LANGUAGES: Record<string, { code: string; name: string; flag: typeof SpainFlag; href: string }> = {
	en: {
		code: 'en',
		name: 'English',
		flag: UnitedStatesFlag,
		href: '/en',
	},
	es: {
		code: 'es',
		name: 'Español',
		flag: SpainFlag,
		href: '/',
	},
};

export const defaultLang = 'es';
export const showDefaultLang = false;
