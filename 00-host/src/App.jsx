import React from "react";
import ReactDOM from "react-dom";

import {BrowserRouter, Routes, Route} from "react-router-dom";

import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import CharacteresPage from "./pages/CharacteresPage";
import NotFound from "./pages/NotFound";

//Module Rutter
import NavbarComponent from "mfNavbar/NavbarComponent";
import Container from 'react-bootstrap/Container';


import "./index.css";

const App = () => (
  <BrowserRouter>
    <Container>
      <NavbarComponent />
    </Container>
    <Routes>
      <Route path="/Home" element={<HomePage />} />
      <Route path="/Characteres" element={<CharacteresPage />} />
      <Route path="/About" element={<AboutPage />} />
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  </BrowserRouter>
);
  
ReactDOM.createRoot(document.getElementById("app")).render(<App />);

