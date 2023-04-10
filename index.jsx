import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {Navbar} from "../../components/navbar/navbar";
import {Footer} from "../../components/footer/footer";
import Home from "../../pages/home";
import About from "../../pages/about"
import "./index.css"
/**
 * Challenge:
 * Bootstrap the VanLife project by creating the first 2 routes:
 * Home and About.
 * 
 * Also include the navbar that can link between the two routes.
 * For now, you'll either need to copy/paste the navbar code
 * to both Home and About pages, or you'll need to find a place
 * to put it where it can be shared between the two pages.
 * (Don't overthink this part - just do whatever is easiest for
 * you because we'll learn a better approach very soon)
 * 
 * Review challenge: do all the CSS yourself based on the design
 * linked in the slides.
 */

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>  
        <Route path="/about" element={<About />}/> 
         <Route path="/vans" element={<Vans />}/>    
      </Routes>
      <Footer />    
    </BrowserRouter>
  )
}



function Vans() {
  return (
    <h1>Vans page goes here</h1>
  )
}
ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);