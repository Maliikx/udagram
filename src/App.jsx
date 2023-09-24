import "./App.css";

import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import AuthPage from "./pages/AuthPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./utils/themeContext";

function App() {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <BrowserRouter>
      <main
        className={`relative flex min-h-screen flex-col items-center text-content bg-wall ${
          isDarkMode ? "theme-dark" : "theme-light"
        }`}
      >
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route path="/profile/:username" element={<ProfilePage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
