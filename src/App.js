import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import ProjectOne from "./pages/Project1";
import NavBar from "./components/navBar";
import React, { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import backgroundImage from "./images/purple_background.jpg";


function App() {
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);

  const handleBackgroundLoad = () => {
    setBackgroundLoaded(true);
  };
  return (
    <div className="App">
      <img
        src={backgroundImage}
        alt="Background"
        onLoad={handleBackgroundLoad}
        onError={(e) => console.error("Image failed to load:", e)}
        style={{ display: "none" }}
      />
      {backgroundLoaded ? (
        <div className="content-with-background">
          <NavBar />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/project1" element={<ProjectOne />} />
            </Routes>
          </BrowserRouter>
        </div>
      ) : (
        <div className="loading-container">
          <CircularProgress />
        </div>
      )}
    </div>
  );
}

export default App;
