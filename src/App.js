
import './App.css';
import "./Styles/main.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
// Import libraries
import { HashRouter,Route, Routes } from 'react-router-dom';
// Import views:
import Home from './Views/home';
import GalleryWalls from './Views/galeryWalls';
import GalleryBallons from './Views/galleryBallons';
// Import Components:
import Header from './Components/navbar';
import Footer from './Components/footer';
import { useTranslation } from 'react-i18next';

const options = [
  {label:"English",value:'en'},
  {label:"Polish",value:'pl'}

]

function App() {
  const {t,i18n} = useTranslation();
  return (
    <div className="App">
      
      <div>
        {/* <button
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
        </button> */}
      
      </div>
      <HashRouter>
        <Header t={t} i18n={i18n} />

        <Routes>
          <Route exact path="/" element={<Home t={t} />} />
          <Route exact path="/gallerywalls" element={<GalleryWalls t={t}/>} />
          <Route exact path="/galleryballoons" element={<GalleryBallons t={t}/>} />
        </Routes>
      </HashRouter>
      {/* <div className='do-skasowania-caly-div'></div> */}
      <section><Footer/></section>
    </div>
  );
}

export default App;
