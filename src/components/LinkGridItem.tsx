import React from "react";
import { Col } from "react-materialize";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface Props {
  title: string
  url: string
  icon: IconDefinition
  image: string
  text: string
}

function handleClick(url: string) {
  window.open(url);
}

const LinkGridItem: React.FC<Props> = ({ title, url, icon, image, text }) => (
  <Col s={6} style={{ padding: '0', marginLeft: "0%" }}>
    <div
      className="waves-effect waves-light"
      style={{...styles.link, flexDirection: "column"}}
      onClick={() => handleClick(url)}>
      <span style={styles.title}>{title}</span>
      <br />
      <img src={image} />
      <br />
      <span style={styles.text}>{text}</span>
    </div>
  </Col>
)

const styles = {
  link: {
    backgroundColor: "var(--primary)",
    display: "flex",
    border: "0.005vw solid var(--primary-light)",
    color: "white",
    cursor: "pointer",
    width: '95%',
    lineHeight: '1',
    marginLeft: "2.5%",
    borderRadius: 13,
  },
  title: {
    marginTop: 15,
  },
  text: {
    fontSize: 12,
    align: "left",
  },
};

export default LinkGridItem;