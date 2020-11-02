import React from "react";
import { Col } from "react-materialize";
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

const LinkGridItem: React.FC<Props> = ({ title, url, icon }) => (
  <Col s={6} style={{ padding: '0' }}>
    <a
      href="#!"
      className="waves-effect waves-light btn" 
      style={styles.link} 
      onClick={() => handleClick(url)}>
      <FontAwesomeIcon icon={icon} />&nbsp;&nbsp;<span>{title}</span>
      </a>
  </Col>
)

const styles = {
  link: {
    height: "10vh",
    backgroundColor: "var(--primary)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "0.005vw solid var(--primary-light)",
    color: "white",
    cursor: "pointer",
    width: '100%',
    lineHeight: '1',
  }
};

export default LinkGridItem;