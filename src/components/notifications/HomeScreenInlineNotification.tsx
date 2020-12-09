import React, { useState } from 'react';
import { Button, Col, Row } from 'react-materialize';

interface Props {
  title: string,
  message: string,
  ctaTitle?: string,
  ctaOnClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
}

const HomeScreenInlineNotification: React.FC<Props> = ({ title, message, ctaTitle, ctaOnClick }) => {
  const [visible, setVisible] = useState(true);
  const closePrompt = () => {
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <Row style={style.container} className="blue darken-4">
      <Row style={{ marginBottom: 0 }}>
        <Col s={11}>
          <h5 style={{ marginTop: 0 }}>{title}</h5>
        </Col>
        <Col s={1}>
          <a href="#!" onClick={closePrompt} style={{ textAlign: "right", ...style.closeButton }}>
            <i className="material-icons" style={{ fontSize: 16 }}>close</i>
          </a>
        </Col>
      </Row>
      <Row style={{ marginBottom: 0 }}>
        <Col s={12}>
          {message}
        </Col>
      </Row>
      {
        ctaTitle !== undefined
          ? <Row style={{ marginBottom: 0, marginTop: 16 }}>
              <Col s={12}>
                <Button style={{ width: "100%" }} className="waves-effect light-blue darken-3" onClick={ctaOnClick}>{ctaTitle}</Button>
              </Col>
            </Row>
          : null
      }
    </Row>
  );
}

const style = {
  container: {
    border: "1px solid #FFFFFF",
    borderRadius: 8,
    color: "white",
    paddingTop: 8,
    paddingBottom: 8,
    marginLeft: 8,
    marginRight: 8,
    marginTop: 32,
    marginBottom: 0,
  },
  closeButton: {
    textDecoration: 'none',
    color: "white",
    verticalAlign: "middle",
    width: "100%",
    display: "inline-block",
  },
}

export default HomeScreenInlineNotification;