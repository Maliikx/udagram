import './App.css';

import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import AuthPage from './pages/AuthPage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <main className='relative flex min-h-screen flex-col items-center text-content bg-wall theme-dark'>
        <Routes>
          <Route path='/' element={<AuthPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/home' element={<HomePage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
