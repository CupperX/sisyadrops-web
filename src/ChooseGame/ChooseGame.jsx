import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./ChooseGame.css";
import ListOfGames from "./ListOfGames";
import AnotherGameInput from "./AnotherGameInput";
import Button from "./Button";
import { GameContext } from './GameContext';

export default function ChooseGame(){
    const [inputValue, setInputValue] = useState('');
    /*const [isStreamerNotExist, checkExist] = useState(false);*/
    const [isInputActive, setIsInputActive] = useState(false);
    const [errBool,setErrBool]=useState(false);

    const navigate = useNavigate();

    const handleConnect = () => {
        console.log(isInputActive);
        console.log(errBool);
        if (isInputActive && inputValue) {
            // Применяем стиль для неверного имени
            //checkExist(true);
            console.log(`Попытка подключения к ${inputValue}`);
        
            
            setErrBool(true);
            console.log(errBool);

            navigate('/login');
            
            // Здесь будет логика подключения
        }
        else{
            setErrBool(false);
            navigate('/login');
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
