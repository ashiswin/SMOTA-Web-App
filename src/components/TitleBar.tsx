import React from "react";
import smota_logo from "../assets/img/smota-logo-full.png";

const TitleBar: React.FC = () => {
    return (
        <div
            style={{backgroundColor: "var(--primary)", position: "fixed", top: 0, left: 0, zIndex: 1000}}>
            <img src={smota_logo} width="50%" alt="SMOTA Logo" />
        </div>
    );
}

export default TitleBar;