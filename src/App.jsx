import './App.css';

import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import AuthPage from './pages/AuthPage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from './utils/context/themeContext';
import { Toaster } from 'react-hot-toast';
import LikesPage from './pages/LikesPage';
import Timer from './components/Timer';

function App() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <BrowserRouter>
      <main
        className={`relative flex min-h-screen flex-col items-center text-content bg-wall ${
          isDarkMode ? 'theme-dark' : 'theme-light'
        }`}
      >
        <Toaster
          position='top-center'
          toastOptions={{
            className: 'mt-16 ',
          }}
        />
        <Routes>
          <Route path='/' element={<AuthPage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/profile/:username' element={<ProfilePage />} />
          <Route path='/likes' element={<LikesPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
