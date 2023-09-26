import './App.css';
import Header  from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import ProductTwo from './components/ProductTwo'
// import Contact from './components/Contact';
import { Routes, Route,Navigate} from "react-router-dom";
import Documentation from './components/Documentation';
import Support from './components/Support';
import FAQ from './components/FAQ';
import Login from './components/Login';

import Download from './components/Download';
import { useEffect,useState } from 'react';
import NotFound from './components/NotFound';
import ContactUs from './components/ContactUs';
import Careers from './components/Careers';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  const [showButton, setShowButton] = useState(false);

  const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 800 || bottom) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, [bottom]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };
  return (

    <div className="App">
     {/* <Routes> */}
      {/* <Route path='/' element={<Login/>}/> */}
     {/* </Routes> */}
     
      
     
      <Routes>
      
          <Route path="/" element={<><Header/><Home /><Footer/></>} />
          <Route path="/About" element={<><Header/><About /><Footer/></>} />
          <Route path="/Products" >
          
          <Route path="DMSBG100" element={<><Header/><Product/><Footer/></>} />
          <Route path="DPBX50" element={<><Header/><ProductTwo/><Footer/></>} />
          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          </Route>
          <Route path="/Download" element={<><Header/><Download /><Footer/></>}>
          </Route>
          <Route path="/Support" >
          <Route path="Documentation" element={<Documentation/>} />
          <Route path="Support" element={<Support/>} />
          <Route path="FAQ" element={<FAQ/>} />
          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          </Route>
          <Route path='/Contact' element={<><Header/><ContactUs/><Footer/></>}/>
          {/* <Route path='/ContactUs' element={<><Header/><ContactUs/><Footer/></>}/> */}
          <Route path='/Login' element={<Login/>}/>
          
          <Route path='/Careers' element={<><Header/><Careers/><Footer/></>}/>
          <Route path='/Privacy' element={<><Header/><PrivacyPolicy/><Footer/></>}/>
          

          <Route path='/404' element={<><Header/><NotFound/><Footer/></>}/>

          <Route path="*"  element={<Navigate to="/404" replace />}/>
      </Routes>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      
  
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          <i className="fa-solid fa-chevron-up fa-lg" style={{color: '#ffffff'}}></i>
        </button>
      )}
 
    </div>

  );
}

export default App;
