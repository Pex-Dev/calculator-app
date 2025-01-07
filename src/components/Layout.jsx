import { useEffect, useState } from "react";
import { useTheme, useCalc } from "../hooks/useContext";

const buttons = [
        { value: '7' },
        { value: '8' },
        { value: '9' },
        { value: 'del', type: 'delete' },
        { value: '4' },
        { value: '5' },
        { value: '6' },
        { value: '+', type: 'operator' },
        { value: '1' },
        { value: '2' },
        { value: '3' },
        { value: '-', type: 'operator' },
        { value: '.' },
        { value: '0' },
        { value: '/', type: 'operator' },
        { value: 'x', type: 'operator' },
      ];

export default function Layout() {
    const {theme, handleClickButtonTheme} = useTheme();
    const {currentInput, handleCurrentInput, handleButtonClick, handleButtonDelClick, handleButtonResultsClick} = useCalc();

    const [posButtonTheme, setPosButtonTheme] = useState(null);   

    //Validate user input
    const handleKeyDown = (e) => {        
        if(e.key === '.'){
            if(currentInput.length < 1 || currentInput.includes('.')){
                e.preventDefault();
            }
        }
    }
    
    useEffect(() => { 
        if(theme){
            if(theme.name=='dark'){            
                setPosButtonTheme('justify-end');        
            }
            if(theme.name=='light'){
                setPosButtonTheme('justify-center');        
            }
            if(theme.name=='neutral'){
                setPosButtonTheme('justify-start');        
            }
        }          
    },[theme])

    if(!theme){
        return ;
    }

    return (
        <div  className={`min-h-dvh flex flex-col justify-center items-center p-5 ${theme.backgroundColor}`}>
            <main className="max-w-[450px] mx-auto">
                    <header>
                        <div className="flex items-end justify-between">
                            <p className={`font-leagueSpartan font-semibold text-2xl ${theme.textColor1}`}>calc</p>
                            <div className="flex items-end">
                                <p className={`uppercase ${theme.textColor1} font-semibold font-leagueSpartan text-xs mb-1 mr-5`}>theme</p>
                                <div className="">
                                    <p className={`flex gap-3 px-2 ${theme.textColor1} font-bold text-sm font-leagueSpartan`}><span>1</span><span>2</span><span>3</span></p>
                                    <button 
                                        className={`w-full ${theme.calcColor} rounded-xl p-1 group flex ${posButtonTheme}`}
                                        onClick={() =>{
                                            handleClickButtonTheme();
                                        }}
                                    >
                                        <div className={posButtonTheme!=null? theme.buttonTheme : theme.calcColor}></div>
                                    </button>
                                </div>
                            </div>                
                        </div>
                        <div className={`${theme.calc2Color} rounded-lg mt-5 p-6 md:py-8 flex flex-col justify-center`}>
                            <input 
                                type="text" 
                                className={`${theme.calc2Color} w-full font-leagueSpartan font-bold ${theme.textColor1} text-4xl text-right outline-none`} 
                                value={currentInput}
                                onKeyDown={handleKeyDown}
                                onChange={(e) => handleCurrentInput(e.target.value)}
                            />
                        </div>
                    </header>
                    <div className={`${theme.calcColor} rounded-lg p-5 mt-5`}>
                        <div className="grid grid-cols-4 gap-5">
                            {buttons.map((button,index) =>(
                                <button 
                                    key={index}
                                    className={button.value=='del'? theme.buttonDel : theme.button } 
                                    onClick={() => 
                                        button.type==='operator'?
                                            handleButtonClick(button.value, button.type)
                                        : button.value==='del'?
                                            handleButtonDelClick()
                                        : handleButtonClick(button.value)}>
                                    <div className={button.value=='del'? theme.buttonDelBorder : theme.buttonBorder}>{button.value}</div>
                                </button>
                            ))}
                            
                        </div>
                        <div className="grid grid-cols-2 mt-5 gap-5">
                            <button className={theme.buttonReset} onClick={() => handleButtonClick('reset','reset')}>
                                <div className={theme.buttonResetBorder}>reset</div>
                            </button>
                            <button className={theme.buttonResult} onClick={() => handleButtonResultsClick()}>
                                <div className={theme.buttonResultBorder}>=</div>
                            </button>
                        </div>
                    </div>
                </main>
        </div>
         
    )
}
