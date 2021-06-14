import React from "react";
import smota_logo from "../assets/img/smota-logo-full.png";

const TitleBar: React.FC = () => {
    return (
        <div
            style={{backgroundColor: "#03C"}}>
            <img src={smota_logo} width="50%" alt="SMOTA Logo" />
        </div>
    );
}

export default TitleBar;