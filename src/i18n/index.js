import i18n from 'i18next';
import XHRBackend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(XHRBackend)
  .use(initReactI18next)
  .init({
    lng: window.localStorage.getItem('lang') || 'en',
    backend: {
      loadPath: './assets/i18n/{{lng}}.json',
    },
    fallbackLng: 'en',

    defaultNS: 'translations',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
      formatSeparator: ',',
    },
    react: {
      wait: true,
    },
  });

export default i18n;
