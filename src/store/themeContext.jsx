import { createContext, useState, useEffect, useContext } from "react";
import UserContext from "./userContext";

const ThemeContext = createContext();

export const ThemeProvider = ({children})=> {

    const LOCAL = localStorage;
    const GETTHEME = LOCAL.getItem('theme');
    const HTML = document.querySelector('html');
    const [theme, setTheme] = useState();
    const [isDark, setIsDark] = useState();

    const setThemeFunction = (themeValue)=> {
        setTheme(themeValue);
        LOCAL.setItem('theme', themeValue)
        HTML.setAttribute('theme', themeValue)

        if(themeValue == 'dark'){
            setIsDark(true)
        }else{
            setIsDark(false)
        }
            
    }

    useEffect(()=> {
        if(GETTHEME){
            setTheme(GETTHEME);
            setThemeFunction(GETTHEME);
        }else{
            setTheme('light');
            setThemeFunction('light');
        }

        if(GETTHEME == 'dark'){
            setIsDark(true)
        }else{
            setIsDark(false)
        }
    }, []);
  
    return(
        <ThemeContext.Provider value={{theme, setTheme, setThemeFunction, isDark}}>
            {children}
        </ThemeContext.Provider>
    )

};

export const useThemeContext = ()=> {
    const {theme, setTheme, setThemeFunction, isDark} = useContext(UserContext);

    return {theme, setTheme, setThemeFunction, isDark};
}

export default ThemeContext;