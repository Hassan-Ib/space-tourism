import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
// import { useThemeContext } from "./provider/themeProvider";
import Home from "./pages/Home";
import Crew from "./pages/Crew";
import Destination from "./pages/Destination";
import Technology from "./pages/Technology";

function App() {
  return (
    <div id="app-container">
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </div>
  );
}

export default App;
