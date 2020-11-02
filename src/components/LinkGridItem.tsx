import React from "react";
import { Col, Row } from "react-bootstrap";
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
      <Col xs={6} style={styles.link} onClick={() => handleClick(url)}>
        <Row>
          <Col xs={2}><FontAwesomeIcon icon={icon} /></Col>
          <Col><span>{title}</span></Col>
        </Row>
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
    cursor: "pointer"
  }
};

export default LinkGridItem;