import React from "react";
import "./AnotherGameInput.css";
import TextOnComponents from "./TextOnComponents";

const AnotherGameInput = ({ isActive, onFocus, setInputValue, /*isStreamerNotExist,*/ errBool }) => {
  return (
    <div className={`another-game-input ${isActive && errBool==false ? 'active' : ''} ${ errBool ? "wrong-name": ""}`}>
      <TextOnComponents nameOfHeader="Другие игры" textForHeader="Укажите стримера по нужной игре"/>
      <input 
        type="text" 
        //className={errBool ? "wrong-name" : ""} 
        placeholder="Никнейм или ссылка"
        onFocus={onFocus}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {errBool ? (<div className="error-message">Стримера с таким никнеймом не существует</div>):(null)}
    </div>
  );
};

export default AnotherGameInput;
