import React from "react";
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";

import Contact from "./components/Contact";
import About from "./components/About";
import News from "./components/News";
import NavBar from "./components/nav-bar/index";
import Home from "./components/Home";
import "./App.css";

const title = "Navigation Bar";

function App() {
  return (
        <div>
        <Router>
        <NavBar />
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        </Routes>
        </Router>
        </div>
  );
}

export default App;
