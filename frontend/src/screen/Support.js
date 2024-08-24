import React, { useEffect , useState } from "react";
import Footer from "../components/Footer";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";



function Support() {
  useEffect(() => {
    document.title =
      "Support Now | Building a Sustainable Tommorow : Emphasizing Eco Friendly Innovations";
  }, []);
  
const [isDarkMode, setIsDarkMode] = useState(true);


useEffect(() => {
  document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
}, [isDarkMode]);


const toggleTheme = () => {
  setIsDarkMode(prevMode => !prevMode);
};
  return (
    <>
      <div class="navbar">
        <div class="nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/resources">Resources</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div class="nav-icons">
            <i className={`fa-solid ${isDarkMode  ? 'fa-sun' : 'fa-2x fa-moon'}`} onClick={toggleTheme}></i>
                <button><Link to="/support">Support</Link></button>
            </div>
        </div>
      </div>
      <div class="support comp2">
        <div class="support-body ">
          <div class="support-card">
            <i class="fa-solid fa-wind"></i>
            <div class="support-card-content">
              <p class="support-title">Wind Energy</p>
              <p class="support-desc">
                Wind energy uses the power of wind to make electricity. Big wind
                turbines with spinning blades catch the wind and turn it into
                energy. It's like nature's way of helping us power up without
                making pollution. It's a clean and endless source of energy
                because the wind never stops blowing!
              </p>
            </div>
            <button>
              <a href="https://www.paypal.com/in/home" target="_blank">Support Now</a>
            </button>
          </div>
          <div class="support-card">
            <i class="fa-solid fa-solar-panel"></i>
            <div class="support-card-content">
              <p class="support-title">Solar Energy</p>
              <p class="support-desc">
                Solar energy comes from the sun, and it's super cool because
                it's free and everywhere! We use solar panels to catch sunlight
                and turn it into electricity. This helps cut down on pollution
                and makes the planet cleaner. Plus, it's renewable, meaning we
                won't run out of sunshine anytime soon!
              </p>
            </div>
            <button>
              <a href="https://www.paypal.com/in/home" target="_blank">Support Now</a>
            </button>
          </div>
          <div class="support-card">
            <i class="fa-solid fa-droplet"></i>
            <div class="support-card-content">
              <p class="support-title">Hydro Energy</p>
              <p class="support-desc">
                Hydro energy comes from moving water, like rivers or dams. When
                water flows, it spins turbines that generate electricity. This
                method is awesome because it doesn't create air pollution. Plus,
                we can control how much power we make, making it a reliable and
                eco-friendly way to generate energy!
              </p>
            </div>
            <button>
              <a href="https://www.paypal.com/in/home" target="_blank">Support Now</a>
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Support;
