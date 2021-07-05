import React, { useState } from "react";
import { Col } from "react-materialize";
import Vibrant from 'node-vibrant';
import { useHistory } from "react-router-dom";

const TILE_WIDTH = "42vw";

interface Props {
  title: string
  url: string
  image: string
  text: string
}

const LinkGridItem: React.FC<Props> = ({ title, url, image, text }) => {
  const [textBackgroundColor, setTextBackgroundColor] = useState("var(--surface)");
  const [textColor, setTextColor] = useState("var(--primary-text)");
  const history = useHistory();

  const handleClick = (url: string) => {
    history.push(url);
  }

  Vibrant.from(image).getPalette()
    .then((palette) => {
      setTextBackgroundColor(palette.Muted?.hex ?? "var(--surface)");
      setTextColor(palette.Muted?.titleTextColor ?? "var(--primary-text)");
    });

  return (
    <Col s={6} style={{ padding: '0', marginLeft: "0%", marginRight: "0%", width: TILE_WIDTH }}>
      <div
        className="waves-effect waves-light"
        style={{
          display: "flex",
          color: "var(--primary-text)",
          cursor: "pointer",
          lineHeight: '1',
          borderRadius: 12,
          boxShadow: "0 0 5px var(--shadow)",
          marginBottom: 12, 
          flexDirection: "column"
        }}
        onClick={() => handleClick(url)}>
        <img style={{objectFit: "cover", width: TILE_WIDTH, height: TILE_WIDTH}} src={image} alt={title} />
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