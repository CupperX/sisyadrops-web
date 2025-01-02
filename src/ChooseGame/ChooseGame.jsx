import React, { useState } from "react";
import "./ChooseGame.css";
import ListOfGames from "./ListOfGames";
import AnotherGameInput from "./AnotherGameInput";
import Button from "./Button";

export default function ChooseGame(){
    const [inputValue, setInputValue] = useState('');
    /*const [isStreamerNotExist, checkExist] = useState(false);*/
    const [isInputActive, setIsInputActive] = useState(false);
    const [errBool,setErrBool]=useState(false);

    const handleConnect = () => {
        console.log(isInputActive);
        console.log(errBool);
        if (isInputActive && inputValue) {
            // Применяем стиль для неверного имени
            //checkExist(true);
            console.log(`Попытка подключения к ${inputValue}`);
            
            console.log("Gey");
            
            setErrBool(true);
            console.log(errBool);
            
            // Здесь будет логика подключения
        }
        else{
            setErrBool(false);
        }
    };
    
    return(
        <div className="choose-game-component">
            <ListOfGames 
                setInputValue={setInputValue} 
                /*isStreamerNotExist={isStreamerNotExist}*/
                setIsInputActive={setIsInputActive}
                isActive={isInputActive}
                errBool={errBool}
            />
            <Button onClick={handleConnect} errBool={errBool}/>
        </div>
    )
}
