import React from "react";
import { Col, Row } from "react-materialize";
import { Link } from "../dummy/DummyHomeScreenLinkProvider";
import LinkGridItem from "./LinkGridItem";

interface Props {
  header: string
  links: Link[]
}

const LinkGrid: React.FC<Props> = ({ header, links }) => {
  let linkPairs = [];

  // Split the list of links into pairs
  for (var i = 0; i < links.length; i += 2) {
    linkPairs.push(links.slice(i, i + 2));
  }

  let linkComponents = linkPairs.map((pair, index) => {
    return (
      <Row style={styles.row} key={index}>
        <LinkGridItem title={pair[0].title} url={pair[0].url} image={pair[0].image} icon={pair[0].iconName} text={pair[0].text} key={pair[0].title} />
        {
          pair.length > 1
            ? <LinkGridItem title={pair[1].title} image={pair[1].image} url={pair[1].url} text={pair[1].text} icon={pair[1].iconName} />
            : null
        }
      </Row>
    );
  })

  return (
    <div>
      <Row style={{ margin: 0 }}>
        <Col s={12}>
          <h4>{header}</h4>
        </Col>
      </Row>
      {linkComponents}
    </div>
  );
}

const styles = {
  row: {
    margin: 0,
    alignItems: "center",
    justifyContent: "center",
  }
};

export default LinkGrid;