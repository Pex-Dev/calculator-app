import { createContext, useState, useEffect } from "react";
import { darkTheme, lightTheme, neutralTheme } from "../assets/themes";

const ThemeContext = createContext();

const ThemeProvider = ({children}) =>{
    const themes = [neutralTheme, lightTheme, darkTheme]

    const [theme, setTheme] = useState(null);
    const [themeIndex, setThemeIndex] = useState(0);

    useEffect(() =>{
        getUserTheme();    
    },[])

    const getUserTheme = () => {  
        const userTheme = localStorage.getItem('theme');
        if(!userTheme){
            const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
            const prefersLightScheme = window.matchMedia("(prefers-color-scheme: light)");
            if (prefersDarkScheme.matches) {
                handleThemeChange(2);
            } else if (prefersLightScheme.matches) {
                handleThemeChange(1);
            } else {
                handleThemeChange(0);
            }    
        }else{
            handleThemeChange(Number(userTheme));
        }    
    }


    const handleThemeChange = (value) =>{    
        setThemeIndex(value);
        setTheme(themes[value]);
        localStorage.setItem('theme',value);
    }

    const handleClickButtonTheme = () =>{        
        let newValue = themeIndex +1;
        if(newValue>2){newValue = 0}
        setThemeIndex(newValue);
        setTheme(themes[newValue])
        localStorage.setItem('theme',newValue);
    } 

    return (
        <ThemeContext.Provider
            value={{
                theme,
                handleClickButtonTheme
            }}
        >
            {children}
        </ ThemeContext.Provider >
    )
} 

export {ThemeProvider}

export default ThemeContext;