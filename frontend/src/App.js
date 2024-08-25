import './App.css';
import './components/css/style.css';
import './components/css/responsive.css';
import './components/css/light.css';

import About from './screen/About';
import Home from './screen/Home';
import Resources from './screen/Resources';
import Contact from './screen/Contact';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Navbar from './components/Navbar';
import Top from './components/Top';
import Support from './screen/Support';


function App() {
  // const location = useLocation();
  document.body.classList.add("light-mode")
  return (
    
    <>
   <Router>
      {/* Conditionally render Navbar based on the current route */}
      <Routes>
        <Route path="/support" element={<Support />} />
        <Route
          path="*"
          element={
            <>
              <Navbar />
              <Top />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </>
          }
        />
      </Routes>
    </Router>
    </>
  );
}

export default App;
