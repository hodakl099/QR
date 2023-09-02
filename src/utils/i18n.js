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
            home: "Home"
          },
          Contact: {
            contact:  "Contact Us"
          },
          Contact: {
            Menu:  "Our Popular Menu"
          },
          More: {
            more:  "See More."
          },
        }
      },
     
      ar: {
        translation: {
          Home: {
            home: "الرئيسة"
          },
          Contact: {
            contact: "تواصل معانا"
          },
         
          Menu: {
            menu: "قائمتنا"
          },
          More: {
            more: "المزيد"
          } 
        }
      }
    }
  });

  export { i18n };
