import React from "react";
import "./AnotherGameInput.css";
import TextOnComponents from "./TextOnComponents";
import { useTranslation } from 'react-i18next';


const AnotherGameInput = ({ isActive, onFocus, setInputValue, /*isStreamerNotExist,*/ errBool }) => {
  const { t } = useTranslation();
  return (
    <div className={`another-game-input ${isActive && errBool==false ? 'active' : ''} ${ errBool ? "wrong-name": ""}`}>
      <TextOnComponents nameOfHeader={t("another-game-header")} textForHeader={t("another-game-second")}/>
      <input 
        type="text" 
        //className={errBool ? "wrong-name" : ""} 
        placeholder={t("another-game-placeholder")}
        onFocus={onFocus}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {errBool ? (<div className="error-message">{t("another-game-streamer-does-not-exist-third")}</div>):(null)}
    </div>
  );
};

export default AnotherGameInput;
