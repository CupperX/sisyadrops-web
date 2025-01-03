import React from 'react';

import CheckMarkIcon from '../assets/check-mark-icon.svg';
import CrossIcon from "../assets/cross-icon.svg";
import KeyIcon from "../assets/key-icon.svg";

import "./ImgWithHeaders.css";
import { useTranslation } from 'react-i18next';


const ImgWithHeaders = ({ variant }) => {
  // Данные для каждого варианта
  const { t } = useTranslation();
  const variants = {
    1: {
      image: CheckMarkIcon,
      h2: "ready-header",
      h3: 'ready-second',
    },
    2: {
      image: KeyIcon,
      h2: 'technical-work-header',
      h3: 'technical-work-and-develop-text-second',
    },
    3: {
      image: KeyIcon,
      h2: 'develop-text-header',
      h3: 'technical-work-and-develop-text-second',
    },
    4: {
      image: CrossIcon,
      h2: 'something-went-wrong-header',
      h3: 'something-went-wrong-second',
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
      <h2>{t(currentVariant.h2)}</h2>
      <h3 className={specialClasses[variant]}>{t(currentVariant.h3)}</h3>
    </div>
  );
};

export default ImgWithHeaders;