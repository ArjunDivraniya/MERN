import React, { useState, createContext, useEffect } from 'react';


export const ThemeContext = createContext({ theme: 'light', toggletheme: () => {} });

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const toggletheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggletheme }}>
        <div className={`app ${theme}`}>
 {children}
        </div>
     
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;