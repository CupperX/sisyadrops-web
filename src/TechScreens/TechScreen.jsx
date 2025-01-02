import React from 'react';
import { useLocation } from 'react-router-dom';
import ImgWithHeaders from './ImgWithHeaders'; // Предположим, что этот компонент уже существует
import Button from './Button'; // Предположим, что этот компонент уже существует
import './TechScreen.css'; // Импортируем стили для нашего приложения


const TechScreen = () => {
  const location = useLocation();
  const state = location.state;
  // Определяем, какое состояние передано
  const isSpecialState = state !== undefined && state !== null && state === 2; // Например, состояние 3 — особое
  const variants={
    1:{
      btn1:"Главное меню",
      btn2:"Посмотреть прогресс"
    },
    2:{
      btn1:"Техподдержка"
    },
    3:{
      btn1:"Техподдержка",
      btn2:"Главное меню"
    },
    4:{
      btn1:"Техподдержка",
      btn2:"Главное меню"
    }
  }


  return (
    <div className='tech-screen'>
      {/* Передаём состояние в компонент ImgWithHeaders */}
      <ImgWithHeaders variant={state} />

      {/* В зависимости от состояния отображаем одну или две кнопки */}
        {isSpecialState ? (
          <div className='div-with-buttons'>
            <Button text={variants[state].btn1} onClick={() => alert('Special Button Clicked!')} />
          </div>
        ) : (
          <div className='div-with-buttons'>
            <Button text={variants[state].btn1} onClick={() => alert('Button 1 Clicked!')} />
            <Button text={variants[state].btn2} onClick={() => alert('Button 2 Clicked!')} />
          </div>
        )}
    </div>
  );
};



export default TechScreen;