import React,{useState,useEffect} from 'react'



import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

function Navbar() {


const [isDarkMode, setIsDarkMode] = useState(true);

  // Effect to set the initial theme and update the body class
  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  }, [isDarkMode]);

  // Toggle the theme when button is clicked
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
        <div class="nav-intro">
            <div class="nav-intro-body">
                <h1>Revolutionary Ideas Drive</h1>
                <h1>the Path to Lasting</h1>
                <h1>SUSTAINABILITY!</h1>
                <div class="wrapper">
                    <div class="static-text">
                        <h2>This site will provide you the information about <span>Sustainable Innovations & More</span></h2>
                    </div>
                    
                    
                </div>
                <div class="nav-intro-p">
                    <p>Dive into a range of groundbreaking solutions that are setting new standards for environmental protection and sustainable living. Learn about the latest technologies and strategies that are transforming how we address ecological challenges. Discover how these innovative approaches are helping us create a more balanced and resilient planet for future generations. Stay informed and inspired as we explore the path to a truly sustainable future.</p>
                </div>
                <button><a href="https://apiumhub.com/tech-blog-barcelona/innovation-blogs/" target='_blank'>Learn More</a></button>
            </div>
            <div class="nav-intro-img">
                <img src="/images/navintro.png" alt="Image 1"/>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Navbar