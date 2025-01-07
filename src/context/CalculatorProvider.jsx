import { useEffect, useState, createContext } from "react";


const CalculatorContext = createContext();


const CalculatorProvider = ({children}) =>{
    const [currentInput, setCurrentInput] = useState('');
    const [prevInput, setPrevInput] = useState('');
    const [operator,setOperator] = useState('');

    const handleCurrentInput = (value) =>{
        setCurrentInput(removeLetters(value));
    }

    const removeLetters = (str) => {
        return str.replace(/[^0-9.]/g, '');
    }  

    const handleButtonClick = (value,type = 'number') =>{
        if(type === 'number'){
            if(value==='.'){
                //Validation for .
                if(!currentInput.includes('.') && currentInput.length > 0){
                  setCurrentInput((prev) => prev + value);
                }
            }else{
                setCurrentInput((prev) => prev + value);
            } 
        }
        if(type === 'operator'){
            setOperator(value);
            setPrevInput(currentInput);
            setCurrentInput('');
        }
        if(type === 'reset'){
            setPrevInput('');
            setCurrentInput('');
            setOperator('');
        }
    } 
    
    const handleButtonDelClick = () =>{
        if(typeof currentInput === 'number'){
            setCurrentInput(currentInput.toString());
        }
        setCurrentInput((prev) => prev.slice(0, -1));
    }   

    const handleButtonResultsClick = () =>{
        if(currentInput.length>0){
            if(operator === '+'){
                setCurrentInput(parseFloat(prevInput) + parseFloat(currentInput));            
            }
            if(operator === '-'){
                setCurrentInput(parseFloat(prevInput) - parseFloat(currentInput));            
            }
            if(operator === '/'){
                if(currentInput === '0'){
                    return;
                }
                setCurrentInput(parseFloat(prevInput) / parseFloat(currentInput));            
            }
            if(operator === 'x'){
                setCurrentInput(parseFloat(prevInput) * parseFloat(currentInput));
            }
            setPrevInput('');
            setOperator('');
        }        
    }

    return (
        <CalculatorContext.Provider
            value={{
                currentInput,
                handleCurrentInput,
                handleButtonClick,
                handleButtonDelClick,
                handleButtonResultsClick
            }}
        >
            {children}
        </CalculatorContext.Provider >
    )
}


export {CalculatorProvider}

export default CalculatorContext;