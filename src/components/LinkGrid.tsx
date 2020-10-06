import React from "react";
import { Container, Row } from "react-bootstrap";
import { DummyLinks } from "../dummy/DummyHomeScreenLinkProvider";
import LinkGridItem from "./LinkGridItem";

const LinkGrid: React.FC = () => {
    let linkPairs = [];

    for(var i = 0; i < DummyLinks.length; i += 2)
    {
      linkPairs.push(DummyLinks.slice(i, i + 2));
    }

    let links = linkPairs.map((pair) => {
        return(
            <Row>
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
        <Container fluid style={{padding: 0}}>
          {links}
        </Container>
    );
}

export default LinkGrid;