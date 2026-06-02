import { createContext, useState, useContext, useEffect } from 'react';
import { translations } from '../translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('vickgames_language');
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'tr')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('vickgames_language', lang);
  };

  const t = (section, key) => {
    try {
      return translations[language][section][key] || translations['en'][section][key];
    } catch (error) {
      console.warn(`Translation key not found: ${section}.${key}`);
      return key;
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
