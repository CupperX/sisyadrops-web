import React from "react";
import "./Button.css";

export default function Button({ onClick, errBool}){
    return(
            <button className={`button-for-save ${errBool ? "error-margin":""}`} onClick={onClick}>Сохранить</button>
    )
}
