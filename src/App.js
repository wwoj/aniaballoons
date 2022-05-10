
import './App.css';
// Import libraries
import { HashRouter,Route, Routes } from 'react-router-dom';
// Import views:
import Home from './Views/home';
import History from './Views/history';
import Contact from './Views/contact';
// Import Components:
import Header from './Components/navbar';
import { useTranslation } from 'react-i18next';

const options = [
  {label:"English",value:'en'},
  {label:"Polish",value:'pl'}

]

function App() {
  const {t,i18n} = useTranslation();
  return (
    <div className="App">
      <div>{t("WelcomeText")}</div>
      <div>
        <button
          onClick={(language) => {
            language = "en";
            console.log(language);
            i18n.changeLanguage(language);
          }}
        >
          English
        </button>
        <button
          onClick={(language) => {
            language = "pl";
            console.log(language);
            i18n.changeLanguage(language);
          }}
        >
          Polish
        </button>
        <button
          onClick={() => {
            document.cookie = "Test me";
          }}
        >
          Test me
        </button>
        <button
          onClick={() => {
            document.cookie = "Test me";
          }}
        >
          Test me1
        </button>
      </div>
      <HashRouter>
        <Header t={t} />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/history" element={<History />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </HashRouter>
      <section>Footer</section>
    </div>
  );
}

export default App;
