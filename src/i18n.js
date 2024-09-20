// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend'; // Import HTTP backend

// Initialize i18next
i18n
  .use(HttpApi)
  .use(LanguageDetector) // Detects the user's language
  .use(initReactI18next) // Passes i18n instance to react-i18next
  .init({
    backend: {
      loadPath: '/locales/{{lng}}/translation.json' // Path to the translation files
    },
    fallbackLng: 'en', // Fallback language if the user language is not available
    interpolation: {
      escapeValue: false // React already safes from XSS
    }
  });

export default i18n;
