import { createContext, useState, useRef } from 'react';

export const ThemeContext = createContext(false);

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('isDarkMode') === 'true' ? true : false
  );
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('isDarkMode', !isDarkMode);
  };

  const postInputRef = useRef(null);

  const focusPostInput = () => {
    postInputRef.current.focus();
    postInputRef.current.scrollTo({
      behavior: 'smooth',
    });
  };

  return (
    <ThemeContext.Provider
      value={{ isDarkMode, toggleDarkMode, postInputRef, focusPostInput }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
