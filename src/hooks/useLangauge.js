import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const useDarkMode = () => {
  const [lang, setLang] = useState('en');
  const { i18n } = useTranslation();

  useEffect(() => {
    const localLang = window.localStorage.getItem('lang');
    if (localLang) {
      setLang(localLang);
    } else {
      setLang('en');
    }
  }, []);

  useEffect(() => {
    i18n.changeLanguage(lang);
    window.localStorage.setItem('lang', lang);
  }, [lang]);

  return [lang, setLang];
};

export default useDarkMode;
