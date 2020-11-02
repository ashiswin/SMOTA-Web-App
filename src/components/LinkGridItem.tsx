import React from "react";
import { Col, Row, Button } from "react-materialize";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface Props {
  title: string
  url: string
  icon: IconDefinition
}

function handleClick(url: string) {
  window.open(url);
}

const LinkGridItem: React.FC<Props> = ({title, url, icon}) => (
      <Col s={6} style={{padding: '0'}}>
        <a className="waves-effect waves-light btn"><FontAwesomeIcon icon={icon} /><span>{title}</span></a>
      </Col>
)

const styles = {
  link: {
    height: "10vh",
    backgroundColor: "#795548",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "0.005vw solid #a98274",
    color: "white",
    cursor: "pointer",
    width: '100%',
  }
};

export default LinkGridItem;