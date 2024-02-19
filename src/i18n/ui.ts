import SpainFlag from '../icons/SpainFlag.astro';
import UnitedStatesFlag from '../icons/UnitedStatesFlag.astro';

export const LANGUAGES: Record<
    string,
    { code: string; name: string; flag: typeof SpainFlag }
> = {
    en: {
        code: 'en',
        name: 'English',
        flag: UnitedStatesFlag
    },
    es: {
        code: 'es',
        name: 'Español',
        flag: SpainFlag
    }
};

export const defaultLang = 'es';
export const showDefaultLang = false;

export const ui = {
    es: {
        'nav.home': 'Accueil'
    },
    en: {
        'nav.home': 'Home'
    }
} as const;
