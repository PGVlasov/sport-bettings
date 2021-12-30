import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { SportEvent } from "./components/sportEvent";
import { AboutPage } from "./pages/AboutPage";
import { MainPage } from "./pages/MainPage";
import { ProfilePage } from "./pages/PrifilePage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route element={<MainPage />} path="/" />
          <Route element={<AboutPage />} path="/about" />
          <Route element={<SportEvent />} path="sportEvent/:id" />
          <Route element={<ProfilePage />} path="/profile" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
