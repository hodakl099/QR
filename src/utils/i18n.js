import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    lng: "ar",
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

  export { i18n };
