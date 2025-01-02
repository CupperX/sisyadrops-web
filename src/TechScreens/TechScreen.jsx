import React from 'react';
import { useLocation } from 'react-router-dom';
import ImgWithHeaders from './ImgWithHeaders'; // Этот компонент уже существует
import Button from './Button'; // Этот компонент уже существует
import './TechScreen.css'; // Импортируем стили для приложения
import { useTranslation } from 'react-i18next';

const TechScreen = () => {
  const location = useLocation();
  const state = location.state;
  const { t } = useTranslation();
  // Определяем, какое состояние передано
  const isSpecialState = state !== undefined && state !== null && state === 2; // Например, состояние 3 — особое
  const variants={
    1:{
      btn1:"main-menu-button",
      btn2:"watch-progress-button"
    },
    2:{
      btn1:"technical-support-button"
    },
    3:{
      btn1:"technical-support-button",
      btn2:"main-menu-button"
    },
    4:{
      btn1:"technical-support-button",
      btn2:"main-menu-button"
    }
  }


  return (
    <div className='tech-screen'>
      {/* Передаём состояние в компонент ImgWithHeaders */}
      <ImgWithHeaders variant={state} />

      {/* В зависимости от состояния отображаем одну или две кнопки */}
        {isSpecialState ? (
          <div className='div-with-buttons'>
            <Button text={t(variants[state].btn1)} onClick={() => alert('Special Button Clicked!')} />
          </div>
        ) : (
          <div className='div-with-buttons'>
            <Button text={t(variants[state].btn1)} onClick={() => alert('Button 1 Clicked!')} />
            <Button text={t(variants[state].btn2)} onClick={() => alert('Button 2 Clicked!')} />
          </div>
        )}
    </div>
  );
};



export default TechScreen;