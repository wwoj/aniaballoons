
import './App.css';
import "./Styles/main.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
// Import libraries
import { HashRouter,Route, Routes } from 'react-router-dom';
// Import views:
import Home from './Views/home';
import GalleryWalls from './Views/galleryWalls';
import GalleryBallons from './Views/galleryBallons';
import Contact from './Views/contact';

// Import Components:

import HeaderMain from './Components/header';
import Footer from './Components/footer';
import { useTranslation } from 'react-i18next';

const options = [
  {label:"English",value:'us'},
  {label:"Polish",value:'pl'}

]

function App() {
  const {t,i18n} = useTranslation();
  return (
    <div className="App">
      <HashRouter>
        <HeaderMain t={t} i18n={i18n} />
        <Routes>
          <Route exact path="/" element={<Home t={t} i18n={i18n} />} />
          <Route
            exact
            path="/photobackdrops"
            element={<GalleryWalls t={t} />}
          />
          <Route
            exact
            path="/animalballoons"
            element={<GalleryBallons t={t} />}
          />
          <Route exact path="/contact" element={<Contact t={t} />} />
        </Routes>
      </HashRouter>
      <div className="footer-cover"></div>
      <section>
        <Footer t={t} />
      </section>
    </div>
  );
}

export default App;
