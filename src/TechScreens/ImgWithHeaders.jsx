import React from 'react';

import CheckMarkIcon from '../assets/check-mark-icon.svg';
import CrossIcon from "../assets/cross-icon.svg";
import KeyIcon from "../assets/key-icon.svg";

import "./ImgWithHeaders.css";


const ImgWithHeaders = ({ variant }) => {
  // Данные для каждого варианта
  const variants = {
    1: {
      image: CheckMarkIcon,
      h2: 'Готово',
      h3: 'Аккаунт успешно подключен, фарм запущен',
    },
    2: {
      image: KeyIcon,
      h2: 'Идут техработы',
      h3: 'Попробуйте позже',
    },
    3: {
      image: KeyIcon,
      h2: 'Этот раздел в разработке',
      h3: 'Попробуйте позже',
    },
    4: {
      image: CrossIcon,
      h2: 'Что-то пошло не так',
      h3: 'Но это не ваша вина. Обратитесь в техподдержку за помощью',
    },
  };
  const specialClasses={
    1: 'success-header',
    2:"",
    3:"",
    4: 'cross-header'
  }

  // Получаем данные для текущего варианта
  const currentVariant = variants[variant] || variants[1]; // Если variant не передан, используем вариант 1

  return (
    <div className='image-with-headers'>
      <img src={currentVariant.image} alt={`Variant ${variant}`} />
      <h2>{currentVariant.h2}</h2>
      <h3 className={specialClasses[variant]}>{currentVariant.h3}</h3>
    </div>
  );
};

export default ImgWithHeaders;