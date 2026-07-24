import React, {createContext, useState, useEffect, useMemo} from 'react'
import { I18n } from 'i18n-js'; // Assuming you're using i18n-js or a similar library
import * as Localization from 'expo-localization';
import { translations } from '../utils/localisation'; // Adjust the path to your translations

interface LocaleContextType {
    i18n: I18n,
    changeLocale: (language: string) => void
}

interface LocaleProviderProps {
    children: React.ReactNode;
}

export const LocaleContext = createContext<LocaleContextType>({
    i18n: new I18n(translations),
    changeLocale: () => {}
});

const LocaleProvider = ({children}: LocaleProviderProps) => {
    const [i18n, setI18n] = useState<I18n>(new I18n(translations));
    
    useEffect(() => {
        i18n.locale = Localization.getLocales()[0].languageTag || 'fr-FR';
        i18n.enableFallback = true;
        i18n.defaultLocale = 'fr-FR';
        getUserLocale();
    }, []);

    const getUserLocale = async () => {
        const storedLocale = localStorage.getItem('locale');
        if (storedLocale) {
            changeLocale(storedLocale);
        } else {
            changeLocale(i18n.locale);
        }
    }

    const changeLocale = (language: string) => {
        const newI18n = new I18n(translations);
        newI18n.locale = language;
        newI18n.enableFallback = true;
        newI18n.defaultLocale = 'fr-FR';
        setI18n(newI18n);
        localStorage.setItem('locale', language);
    }

    return useMemo(() => (
        <LocaleContext.Provider value={{i18n, changeLocale}}>
            {children}
        </LocaleContext.Provider>
    ), [i18n, children]);
}

export default LocaleProvider;