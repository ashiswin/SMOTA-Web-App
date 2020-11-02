import React from "react";
import smota_jubotron_1 from "../assets/img/smota-jumbotron.jpg";
import smota_jubotron_2 from "../assets/img/smota-jumbotron-2.jpg";
import smota_jubotron_3 from "../assets/img/smota-jumbotron-3.jpg";
import LinkGrid from "../components/LinkGrid";
import { DummyCategories, DummyLinks } from "../dummy/DummyHomeScreenLinkProvider";
import { Row, Slider, Slide } from "react-materialize";

const HomeScreen: React.FC = () => {
  let gridComponents = DummyCategories.map((category) => 
    <LinkGrid links={DummyLinks[category]} header={category} />);
  return(
    <>
      <Row>
        <Slider
          fullscreen={false}
          options={{
            duration: 500,
            height: 200,
            indicators: false,
            interval: 6000
          }}
          style={{marginBottom: -20}}
        >
          <Slide image={<img alt="" src={smota_jubotron_1} style={styles.image}/>} />
          <Slide image={<img alt="" src={smota_jubotron_2} style={styles.image}/>} />
          <Slide image={<img alt="" src={smota_jubotron_3} style={styles.image}/>} />
        </Slider>
      </Row>
      {gridComponents}
    </>
  );
}

const styles = {
  image: {
    width: "100%",
  }
}

export default HomeScreen;