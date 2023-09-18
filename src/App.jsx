import "./App.css";
import Form from "./components/Form";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import EntryPage from "./pages/EntryPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signuppage from "./pages/Signuppage";

function App() {
  return (
    <BrowserRouter>
      <main className="relative flex min-h-screen flex-col items-center text-content bg-primary theme-light">
        <Routes>
        <Route path="/signup" element={<Signuppage />} />
          <Route path="/" element={<EntryPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
