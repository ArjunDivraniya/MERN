import React , {useState ,useEffect ,createContext} from 'react'

export const ThemeContext  = createContext({theme:'light' , toggletheme: () => {} })

const ThemeProvider = ({children}) => {
  const [theme,setTheme] =useState(localStorage.getItem('theme') || 'light')

  const toggletheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  }
  useEffect(()=>{
    localStorage.setItem('theme',theme);
    document.documentElement.className = theme;
  },[theme])

  return (
    <div className={`app ${theme}`}>
      <ThemeContext.Provider value={{ theme, toggletheme }}>
        {children}
      </ThemeContext.Provider>
    </div>
  )
}

export default ThemeProvider