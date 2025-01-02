import React, { useState } from "react";
import "./ListOfGames.css";
import TextOnComponents from "./TextOnComponents"
import AnotherGameInput from "./AnotherGameInput";
import { useTranslation } from 'react-i18next';


const ListOfGames = ({setInputValue,/* isStreamerNotExist,*/ setIsInputActive, isActive, errBool}) => {
  const { t } = useTranslation();
  // Состояния для хранения активности
  const [activeButton, setActiveButton] = useState(null);

  const buttonTexts = [
    'game-1-button',
    'game-2-button',
    'game-3-button',
    'game-4-button',
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
      <TextOnComponents nameOfHeader={t("choose-game-header")} textForHeader={t("choose-game-second")}/>
      {buttonTexts.map((ClassOfText, id) => (
        <button
          key={`button-${id}`}
          className={activeButton === id ? 'active' : ''}
          onClick={() => handleButtonClick(id)}
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