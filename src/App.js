
import './App.css';
// Import libraries
import { HashRouter,Route, Routes } from 'react-router-dom';
// Import views:
import Home from './Views/home';
import History from './Views/history';
import Contact from './Views/contact';
// Import Components:
import Header from './Components/navbar';

function App() {
  return (
    <div className="App">

      <HashRouter>
      <Header/>

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
