import { Icon } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "../dummy/DummyHomeScreenLinkProvider";
import LinkGridItem from "./LinkGridItem";

interface Props {
  header: string
  links: Link[]
}

const LinkGrid: React.FC<Props> = ({header, links}) => {
    let linkPairs = [];

    // Split the list of links into pairs
    for(var i = 0; i < links.length; i += 2)
    {
      linkPairs.push(links.slice(i, i + 2));
    }

    let linkComponents = linkPairs.map((pair) => {
        return(
            <Row style={{margin: 0}}>
                <LinkGridItem title={pair[0].title} url={pair[0].url} icon={pair[0].iconName}/>
                {
                    pair.length > 1
                      ? <LinkGridItem  title={pair[1].title} url={pair[1].url} icon={pair[1].iconName}/>
                      : null
                }
            </Row>
        );
      })
    
    return(
            <h2>{header}</h2>
        <Container fluid style={{padding: 0, marginBottom: 8}}>
          <Row style={{margin: 0}}>
            <Col xs={12}>
            </Col>
          </Row>
          {linkComponents}
        </Container>
    );
}

export default LinkGrid;