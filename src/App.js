import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import ProjectOne from "./pages/Project1";
import ProjectTwo from "./pages/Project2";
import NavBar from "./components/navBar";
import CircularProgress from "@mui/material/CircularProgress";
import "./App.css";

function App() {
  const [appLoaded, setAppLoaded] = useState(false);

  const handleAppLoad = () => {
    setAppLoaded(true);
  };

  useEffect(() => {
    handleAppLoad();
  }, []);
  return (
    <div
      className={`App ${appLoaded ? "app-loaded" : ""}`}
      onLoad={handleAppLoad}
    >
      {appLoaded ? (
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
              <Route path="/project2" element={<ProjectTwo />} />
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
