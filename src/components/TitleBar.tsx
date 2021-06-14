import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import smota_logo from "../assets/img/smota-logo-full.png";

interface Props {
    backEnabled: boolean,
}
const TitleBar: React.FC<Props> = ({backEnabled}) => {
    return (
        <>
            <div
                style={{backgroundColor: "var(--primary)", position: "fixed", top: 0, left: 0, zIndex: 1000, display: "flex", flexDirection:"row", alignItems: "center", paddingBottom: 4, paddingTop: 4}}>
                {
                    backEnabled
                        ? <div style={{width: 32, height: 32}}>
                            <FontAwesomeIcon
                            icon={faArrowLeft}
                            color="white"
                            size="lg"
                            style={{position: "relative", top: 8, left: 14}} />
                            </div>
                        : null
                }
            <img src={smota_logo} width="50%" alt="SMOTA Logo" />
            </div>
            <img src={smota_logo} width="50%" alt="SMOTA Logo" />
        </>
    );
}

export default TitleBar;