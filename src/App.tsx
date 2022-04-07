import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
// import { useThemeContext } from "./provider/themeProvider";
import Home from "./pages/Home";
import Crew from "./pages/Crew";
import Destination from "./pages/Destination";
import Technology from "./pages/Technology";
// import Container from "./components/Container";

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
        <Route
          path="*"
          element={
            <main className="bg-destination h-screen ">
              <div className="text-center h-full flex flex-col gap-10 items-center justify-center">
                <h3>404 page not in space 😂</h3>
                <Link
                  to="/"
                  className=" uppercase font-barlow-condensed tracking-widest backdrop-blur-3xl backdrop-brightness-150 px-6 py-2 hover:backdrop-brightness-200  ">
                  go back home
                </Link>
              </div>
            </main>
          }></Route>
      </Routes>
    </div>
  );
}

export default App;
