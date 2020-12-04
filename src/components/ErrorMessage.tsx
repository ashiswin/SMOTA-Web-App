import React from 'react';
import { Col, Row } from 'react-materialize';

interface Props {
  message: string,
  visible: boolean,
  onCloseClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void,
}

const ErrorMessage: React.FC<Props> = ({ message, visible, onCloseClick }) => {
  return (
    visible
      ? <Row style={style.container}>
          <Col s={11} style={{ color: "red" }}>
            {message}
          </Col>
          <Col s={1}>
            <a href="#!" onClick={onCloseClick} style={{ textDecoration: 'none', color: "red", verticalAlign: "middle" }}>
              <i className="material-icons" style={{ fontSize: 16 }}>close</i>
            </a>
          </Col>
        </Row>
      : null
  )
};

const style = {
  container: {
    border: "1px solid red",
    borderRadius: 4,
    paddingTop: 8,
    paddingBottom: 8,
    marginBottom: 0,
  }
}
export default ErrorMessage;