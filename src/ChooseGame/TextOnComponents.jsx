import React from "react";
import "./TextOnComponents.css";

export default function TextOnComponents(props) {
    return(
        <div className="text-on-components">
            <h2>{props.nameOfHeader}</h2>
            <h3>{props.textForHeader}</h3>
        </div>
    )
}