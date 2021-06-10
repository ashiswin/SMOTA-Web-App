import { faCalendar, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faEllipsisH, faHandHoldingHeart, faHome, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Row, Col } from "react-materialize";
import { useHistory } from 'react-router-dom';

interface BottomTabProps {
    title: string,
    icon: IconDefinition,
    target: string,
    selected: string,
    setSelected: React.Dispatch<React.SetStateAction<string>>,
}

const BottomTab: React.FC<BottomTabProps> = ({title, icon, target, selected, setSelected}) => {
    const history = useHistory();

    return (
        <Col style={{
            width: "20%", 
            height: 48, 
            textAlign: "center", 
            paddingTop: 4,
            color: selected === title ? "#1565C0" : "#666666"
        }}>
            <div 
                style={{width: "100%"}} 
                onClick={() => {
                    setSelected(title);
                    history.push(target);
                }}>
                <FontAwesomeIcon icon={icon} size="lg" />
                <br />
                <span style={{fontSize: 12, fontWeight: 500}}>{title}</span>
            </div>
        </Col>
    );
}

const BottomTabNavigation: React.FC = () => {
    const [selected, setSelected] = useState("Home");

    return (
        <div style={{width: "100%", height: 48, position: "fixed", bottom: 0, boxShadow: "0 0 5px #cccccc"}}>
            <Row>
                <BottomTab
                    title="Home"
                    icon={faHome}
                    target="/"
                    selected={selected}
                    setSelected={setSelected}
                />
                <BottomTab
                    title="Today"
                    icon={faCalendar}
                    target="/about"
                    selected={selected}
                    setSelected={setSelected}
                />
                <BottomTab
                    title="Contact"
                    icon={faEnvelope}
                    target="/about"
                    selected={selected}
                    setSelected={setSelected}
                />
                <BottomTab
                    title="Give"
                    icon={faHandHoldingHeart}
                    target="/about"
                    selected={selected}
                    setSelected={setSelected}
                />
                <BottomTab
                    title="More"
                    icon={faEllipsisH}
                    target="/about"
                    selected={selected}
                    setSelected={setSelected}
                />
            </Row>
        </div>
    );
}

export default BottomTabNavigation;