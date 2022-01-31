import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Reset } from "./components/Reset";
import { SportEvent } from "./components/sportEvent";
import { AboutPage } from "./pages/AboutPage";
import { AuthPage } from "./pages/AuthPage";
import { CreateEventPage } from "./pages/CreateEventPage";
import { MainPage } from "./pages/MainPage";
import { ProfilePage } from "./pages/PrifilePage";
import { RegisterPage } from "./pages/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route element={<MainPage />} path="/" />
          <Route element={<CreateEventPage />} path="/createEvent" />
          <Route element={<AboutPage />} path="/about" />
          <Route element={<SportEvent />} path="sportEvent/:id" />
          <Route element={<ProfilePage />} path="/profile" />
          <Route element={<AuthPage />} path="/auth" />
          <Route element={<RegisterPage />} path="/register" />
          <Route element={<Reset />} path="/reset" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
