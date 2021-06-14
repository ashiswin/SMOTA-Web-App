import React, { useState } from "react";
import { Col } from "react-materialize";
import Vibrant from 'node-vibrant';

interface Props {
  title: string
  url: string
  image: string
  text: string
}

function handleClick(url: string) {
  window.open(url);
}

const LinkGridItem: React.FC<Props> = ({ title, url, image, text }) => {
  const [textBackgroundColor, setTextBackgroundColor] = useState("var(--surface)");
  const [textColor, setTextColor] = useState("var(--primary-text)");

  Vibrant.from(image).getPalette()
    .then((palette) => {
      setTextBackgroundColor(palette.LightMuted?.hex ?? "var(--surface)");
      setTextColor(palette.LightMuted?.titleTextColor ?? "var(--primary-text)");
    });

  return (
    <Col s={6} style={{ padding: '0', marginLeft: "0%", marginRight: "0%", width: "42vw" }}>
      <div
        className="waves-effect waves-light"
        style={{
          backgroundColor: "var(--surface)",
          display: "flex",
          color: "var(--primary-text)",
          cursor: "pointer",
          width: '100%',
          lineHeight: '1',
          borderRadius: 12,
          boxShadow: "0 0 5px #cccccc",
          marginBottom: 12, 
          flexDirection: "column"
        }}
        onClick={() => handleClick(url)}>
        <img style={{objectFit: "cover", width: "42vw", height: "42vw"}} src={image} alt={title} />
        <br />
        <div style={{
          paddingBottom: 8,
          paddingLeft: 4,
          paddingRight: 4,
          paddingTop: 8,
          marginTop: -16,
          backgroundColor: textBackgroundColor
        }}>
          <span style={{
            fontSize: 12,
            height: "2em",
            lineHeight: "1em",
            display: "inline-block",
            width: "100%",
            textAlign: "center",
            color: textColor
          }}>{text}</span>
        </div>
      </div>
    </Col>
  );
}

export default LinkGridItem;