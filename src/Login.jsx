import React, { useState, useContext } from 'react'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import "./ConnectScreen.css";
import './Login.css';
import Switch from './Switch.jsx';
import { GameContext } from './ChooseGame/GameContext';

import arrowBtn from './assets/arrow.svg';

const Login = () => {

    const { t } = useTranslation();

    const navigate = useNavigate();

  const [nickname, setNickname] = useState('');
  const [inputColor, setInputColor] = useState('');
  const [inputBack, setInputBack] = useState('');
  const [isValid, setIsValid] = useState(true);
  const[nameOfClass,setNameOfClass]=useState("");

  const [isHaveThisUsernameInYourAccount, setIsHaveThisUsernameInYourAccount] = useState(false);
  const [isHaveThisUsername, setIsHaveThisUsername] = useState(false);
  const { selectedGame } = useContext(GameContext);
  const usernameExistForTest = "Username";
  const usernameNotExistForTest = "Twitch";
  const nameOfClasses={
    1:"",
    2:"invalid-label-for-input",
    3:"invalid-label-for-input",
    4:"already-have-label-for-input"
  };
  const [NumbOfWarn, setNumbOfWarn] = useState(null);

  const validateNickname = () => {
    return nickname.trim() !== '';
  };
  const checkNickname=()=>{
    if(validateNickname()){
        if(nickname.trim()===usernameExistForTest/*сюда добавите функцию на проверку с бд об этом объекте*/){
            return 4;
        }else if(nickname.trim()===usernameNotExistForTest){
          return 3;
        }
        return 1;
    }
    return 2;
  }

  const handleClick = () => {
    setNumbOfWarn(checkNickname());
    if (NumbOfWarn===1) {
      setInputColor('#4a9ddb');
      setInputBack('rgba(86, 164, 255, 0.1)');
      navigate('/access');
      setIsValid(true);
      console.log('correct');
    }else if(NumbOfWarn===2){
      setInputBack('rgba(219, 74, 74, 0.1)');
      setInputColor('#db4a4a');
      setIsValid(false);
      console.log('incorrect');
    }else if(NumbOfWarn===3){
      setInputBack('rgba(219, 74, 74, 0.1)');
      setInputColor('#db4a4a');
      setIsHaveThisUsername(true);
      console.log("It's not your username!");
    }else if(NumbOfWarn===4){
      setInputBack("rgba(190, 126, 254, 0.1)");
      setInputColor('#be7efe');
      setIsHaveThisUsernameInYourAccount(true);
      console.log("We have this username in your account");
    }
  };

  return (
    <div className="main-screen">
        <div className="info-box">
            <h2 className="connect-info-header">{t('connect_info_header')}</h2>
            <h4 className="connect-info-second">{t('connect_info_second')}</h4>
        </div>

        <div className="divider"></div>

        <div className="container-outsider">
            <div className="nickname-container">
                <label htmlFor="nickname" className="nickname-container-label" style={{ color: inputColor }}>{t('nickname_label')}</label>
                <input
                    type="text"
                    id="nickname"
                    placeholder={t('nickname_placeholder')}
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                    style={{ borderColor: inputColor, backgroundColor: inputBack }}
                    className={`nickname-container-input ${isValid ? '' : 'invalid'}`}
                />
                <label htmlFor="nickname" className="nickname-container-span" style={{ display: isValid ? 'none' : 'block' }}>{t(`${nameOfClasses[NumbOfWarn]}${NumbOfWarn}`)}</label>
            </div>

            <div className="switch-container">
                <label className="switch-label">{t('farm_mode_label')}</label>
                <Switch />
            </div>

            <div className="game-container">
                <p className="game-text">{t("game_text")}</p>
                <button className="game-button" onClick={() => navigate('/game')}>
                    {t(selectedGame)}
                    <span><img src={arrowBtn} alt="arrow" /></span>
                </button>
            </div>

            <button className="complite-button" onClick={handleClick}>
                {t('continue_button')}
            </button>
        </div>
    </div>
  );
}

export default Login;
