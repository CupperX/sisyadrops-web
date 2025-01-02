import React from "react";
import "./Button.css";
import { useTranslation } from 'react-i18next';


export default function Button({ onClick, errBool}){
    const { t } = useTranslation();
    return(
            <button className={`button-for-save ${errBool ? "error-margin":""}`} onClick={onClick}>{t("save-button")}</button>
    )
}
