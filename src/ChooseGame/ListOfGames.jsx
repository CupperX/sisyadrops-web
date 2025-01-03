import React, { useState, useContext } from "react";
import "./ListOfGames.css";
import TextOnComponents from "./TextOnComponents"
import AnotherGameInput from "./AnotherGameInput";
import { useTranslation } from 'react-i18next';
import { GameContext } from './GameContext';


const ListOfGames = ({setInputValue,/* isStreamerNotExist,*/ setIsInputActive, isActive, errBool}) => {
  const { t } = useTranslation();
  // Состояния для хранения активности
  const [activeButton, setActiveButton] = useState(null);

  const { setSelectedGame } = useContext(GameContext);

  const buttonTexts = [
    'game-1-button',
    'game-2-button',
    'game-3-button',
    'game-4-button',
  ];

  // Обработчик клика по кнопке
  const handleButtonClick = (id, ClassOfText) => {
    setActiveButton(id);
    setIsInputActive(false);
    setSelectedGame(ClassOfText);
  };

  // Обработчик фокуса на input
  const handleInputFocus = () => {
    setIsInputActive(true);
    setActiveButton(null);
  };

  return (
    <div className="list-of-games">
      <TextOnComponents nameOfHeader={t("choose-game-header")} textForHeader={t("choose-game-second")}/>
      {buttonTexts.map((ClassOfText, id) => (
        <button
          key={`button-${id}`}
          className={activeButton === id ? 'active' : ''}
          onClick={() => handleButtonClick(id, ClassOfText)}
        >
          {t(ClassOfText)}
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