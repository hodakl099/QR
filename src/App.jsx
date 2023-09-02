import React,{useEffect} from "react";
import Routes from "./Routes";
import { I18nextProvider } from 'react-i18next';
import { i18n } from '../src/utils/i18n';
function App() {
  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  return (
    <I18nextProvider i18n={i18n}>
      <Routes />
    </I18nextProvider>
  );
}

export default App;

