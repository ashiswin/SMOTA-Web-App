import React from "react";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface Props {
  title: string
  url: string
  icon: IconDefinition
}

const LinkGridItem: React.FC<Props> = ({title, url, icon}) => (
      <Col xs={6} style={styles.link}>
        <Row>
          <Col xs={2}><FontAwesomeIcon icon={icon} /></Col>
          <Col><a href={url}>{title}</a></Col>
        </Row>
      </Col>
)

const styles = {
  link: {
    height: "10vh",
    backgroundColor: "#CCCCCC",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default LinkGridItem;