import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Testimonials from './Testimonials'
import Services from './Services'
import Hire from './Hire'
import Contact from './Contact'
import Script from './Script'
// Header Component

function App() {
  return (
    <div className="container">
   <Navbar title="Skoolink"/>
   <Home/>
   <About/>
   <Skills/>
   <Projects/>
   <Testimonials/>
   <Services/>
   <Hire/>
   <Contact/>
   <Script/>
    </div>
  );
}

export default App;
