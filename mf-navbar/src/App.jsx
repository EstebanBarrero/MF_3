import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponet from "./components/NavbarComponent";
import Container from 'react-bootstrap/Container';
import {BrowserRouter } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <Container>
      <NavbarComponet />
      <div>Content</div>
    </Container>
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
