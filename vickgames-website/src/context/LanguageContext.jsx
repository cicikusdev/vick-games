import { createContext, useState, useContext } from 'react';
import { translations } from '../translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const handleSetLanguage = (lang) => {
    setLanguage(lang);
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
