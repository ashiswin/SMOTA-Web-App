import React from "react";
import { Col } from "react-materialize";

interface Props {
  title: string
  url: string
  image: string
  text: string
}

function handleClick(url: string) {
  window.open(url);
}

const LinkGridItem: React.FC<Props> = ({ title, url, image, text }) => (
  <Col s={6} style={{ padding: '0', marginLeft: "0%" }}>
    <div
      className="waves-effect waves-light"
      style={{...styles.link, flexDirection: "column"}}
      onClick={() => handleClick(url)}>
      <img src={image} alt={title}/>
      <br />
      <div style={{padding: 8}}>
        <span style={{...styles.text, textAlign: "center"}}>{text}</span>
      </div>
    </div>
  </Col>
)

const styles = {
  link: {
    backgroundColor: "var(--surface)",
    display: "flex",
    color: "var(--primary-text)",
    cursor: "pointer",
    width: '95%',
    lineHeight: '1',
    borderRadius: 12,
    boxShadow: "0 0 5px #cccccc",
    marginBottom: 12,
  },
  text: {
    fontSize: 12,
    color: "var(--secondary-text)",
    height: "2em",
    lineHeight: "1em",
    display: "inline-block",
    width: "100%",
  },
};

export default LinkGridItem;