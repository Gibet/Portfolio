import React, {createContext, useState, useEffect, useMemo, useContext} from 'react'
import i18n from '../i18n'
interface LocaleContextType {
    locale: string;
    changeLocale: (language: string) => void
}

interface LocaleProviderProps {
    children: React.ReactNode;
}

export const LocaleContext = createContext<LocaleContextType>({
    locale: 'fr-FR',
    changeLocale: () => {}
});

const mapBrowserToAppLocale = (nav: string | undefined) => {
  if (!nav) return 'fr-FR';
  if (nav.startsWith('fr')) return 'fr-FR';
  return 'en-GB';
};

const resolveInitialLocale = () => {
  const stored = localStorage.getItem('locale');
  if (stored) return stored;
  const nav = (navigator.languages && navigator.languages[0]) || navigator.language;
  return mapBrowserToAppLocale(nav);
};

export const LocaleProvider = ({children}: LocaleProviderProps) => {
    const [locale, setLocale] = useState<string>(() => resolveInitialLocale())
    
    useEffect(() => {
        localStorage.setItem('locale', locale)
        void i18n.changeLanguage(locale)
    }, [locale]);


    const changeLocale = (language: string) => {
        const map = mapBrowserToAppLocale(language);
        setLocale(map)
    }

    return useMemo(() => (
        <LocaleContext.Provider value={{locale, changeLocale}}>
            {children}
        </LocaleContext.Provider>
    ), [locale, children]);
}

export const useLocale = () => useContext(LocaleContext);