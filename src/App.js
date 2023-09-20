import './App.css';
import Header  from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import ProductTwo from './components/ProductTwo'
import Contact from './components/Contact';
import { Routes, Route,Navigate} from "react-router-dom";
import Documentation from './components/Documentation';
import Support from './components/Support';
import FAQ from './components/FAQ';
import Login from './components/Login';
import Testit from './components/Testit';
import Download from './components/Download';
import { useEffect,useState } from 'react';
import NotFound from './components/NotFound';

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
     <Routes>
      <Route path='/' element={<Login/>}/>
     </Routes>
     
      <Header/>
     
      <Routes>
      
          <Route path="/home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Products" >
          <Route path="SBM100" element={<Product title="SBM100"/>} />
          <Route path="DMSBG100" element={<Product/>} />
          <Route path="DPBX50" element={<ProductTwo/>} />
          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          </Route>
          <Route path="/Download" element={<Download />}>
          </Route>
          <Route path="/Support" >
          <Route path="Documentation" element={<Documentation/>} />
          <Route path="Support" element={<Support/>} />
          <Route path="FAQ" element={<FAQ/>} />
          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          </Route>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/test' element={<Testit/>}/>
          <Route path='/404' element={<NotFound/>}/>

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
      
      <Footer/>
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          <i className="fa-solid fa-chevron-up fa-lg" style={{color: '#ffffff'}}></i>
        </button>
      )}
 
    </div>

  );
}

export default App;
