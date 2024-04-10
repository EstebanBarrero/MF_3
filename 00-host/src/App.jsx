import React from "react";
import ReactDOM from "react-dom";

import {BrowserRouter, Routes, Route,  Switch } from "react-router-dom";

import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import CharacteresPage from "./pages/CharacteresPage";
import NotFound from "./pages/NotFound";

import mfNavbar from "mfNavbar/NavbarComponent";


import "./index.css";

const App = () => (
  <>
  < mfNavbar />
  <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Characteres" element={<CharacteresPage />} />
      <Route path="/About" element={<AboutPage />} />
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  </BrowserRouter>
  </>
);
  
ReactDOM.createRoot(document.getElementById("app")).render(<App />);

