import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    lang: "ar",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          Home: {
            hello: "Hello World!"
          }
        }
      },
      ar: {
        translation: {
          Home: {
            hello: "يسسسس"
          }
        }
      }
    }
  });

export default i18n;