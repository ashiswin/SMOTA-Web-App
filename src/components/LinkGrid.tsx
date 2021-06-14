import React from "react";
import { Row } from "react-materialize";
import { Link } from "../dummy/DummyHomeScreenLinkProvider";
import LinkGridItem from "./LinkGridItem";

interface Props {
  links: Link[]
}

const LinkGrid: React.FC<Props> = ({ links }) => {
  let linkPairs = [];

  // Split the list of links into pairs
  for (var i = 0; i < links.length; i += 2) {
    linkPairs.push(links.slice(i, i + 2));
  }

  let linkComponents = linkPairs.map((pair, index) => {
    return (
      <Row style={styles.row} key={index}>
        <LinkGridItem title={pair[0].title} url={pair[0].url} image={pair[0].image} text={pair[0].text} key={pair[0].title} />
        {
          pair.length > 1
            ? <LinkGridItem title={pair[1].title} image={pair[1].image} url={pair[1].url} text={pair[1].text} />
            : null
        }
      </Row>
    );
  })

  return (
    <div style={{paddingLeft: 16, paddingRight: 16, marginTop: 40,}}>
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