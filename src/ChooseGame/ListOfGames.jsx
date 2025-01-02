import React, { useState } from "react";
import "./ListOfGames.css";
import TextOnComponents from "./TextOnComponents"
import AnotherGameInput from "./AnotherGameInput";

const ListOfGames = ({setInputValue,/* isStreamerNotExist,*/ setIsInputActive, isActive, errBool}) => {
  // Состояния для хранения активности
  const [activeButton, setActiveButton] = useState(null);

  const buttonTexts = [
    'Stalcraft',
    'Rust',
    'Escape from Tarkov',
    'Warframe',
  ];

  // Обработчик клика по кнопке
  const handleButtonClick = (id) => {
    setActiveButton(id);
    setIsInputActive(false);
  };

  // Обработчик фокуса на input
  const handleInputFocus = () => {
    setIsInputActive(true);
    setActiveButton(null);
  };

  return (
    <div className="list-of-games">
      <TextOnComponents nameOfHeader="Выбор игры" textForHeader="Стримеры будут выбраны автоматически"/>
      {buttonTexts.map((text, id) => (
        <button
          key={`button-${id}`}
          className={activeButton === id ? 'active' : ''}
          onClick={() => handleButtonClick(id)}
        >
          {text}
        </button>
      ))}
      <AnotherGameInput 
                isActive={isActive}
                onFocus={handleInputFocus}
                setInputValue={setInputValue}
                //isStreamerNotExist={isStreamerNotExist}
                errBool={errBool}
      />
    </div>
  );
};

export default ListOfGames;