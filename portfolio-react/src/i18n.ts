import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './assets/locales/en/translation.json';
import fr from './assets/locales/fr/translation.json';

i18n.use(initReactI18next).init({
  resources: {
    'en-GB': { translation: en },
    'fr-FR': { translation: fr}
  },
  lng: localStorage.getItem('locale') ||
       ((navigator.languages?.[0] || navigator.language || 'fr-FR').startsWith('fr') ? 'fr-FR' : 'en-GB'),
  fallbackLng: 'fr-FR',
  interpolation: { escapeValue: false },
});

export default i18n;