import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import smota_logo from "../assets/img/smota-logo.png";

const AboutScreen: React.FC = () => (
  <Container style={{textAlign: "center"}}>
    <Row style={{paddingTop: 16, paddingBottom: 16}}>
      <Col sm={12}>
        <img src={smota_logo} alt="St Mary of the Angels Singapore" />
      </Col>
    </Row>
    <Row>
      <Col sm={12}>
        <h3>CHURCH OF ST MARY OF THE ANGELS</h3>
      </Col>
    </Row>
    <a href="http://maps.google.com/?q=Saint Mary of the Angels Singapore">5 Bukit Batok East Ave 2, Singapore 659918</a>
    <br />
    Tel: <a href="tel:+6565673866">6567-3866</a>
    <br />
    Fax: <a href="tel:+6565621824">6562-1824</a>
    <br />
    Email: <a href="mailto:parish.stmary@catholic.org.sg">parish.stmary@catholic.org.sg</a>
    <br />
  </Container>
);

export default AboutScreen;