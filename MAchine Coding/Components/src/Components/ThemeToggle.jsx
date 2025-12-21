import React from 'react';
import { useContext } from 'react';
import {ThemeContext} from './ThemeContext.jsx';

const ThemeToggle = () => {
    const {theme , toggletheme} = useContext(ThemeContext);
  return (
  <>
  <button onClick={toggletheme} className='theme-btn'>{theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"} </button>
  </>
  )
}

export default ThemeToggle