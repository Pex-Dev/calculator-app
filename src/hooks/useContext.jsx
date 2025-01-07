import { useContext } from "react";
import CalculatorContext from "../context/CalculatorProvider";
import ThemeContext from "../context/ThemeProvider";

const useCalc = () =>{
    return useContext(CalculatorContext);
}

const useTheme = () =>{
    return useContext(ThemeContext)
}

export {useCalc, useTheme}