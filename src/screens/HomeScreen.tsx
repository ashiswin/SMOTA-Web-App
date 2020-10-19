import React from "react";
import smota_jubotron_1 from "../assets/img/smota-jumbotron.jpg";
import smota_jubotron_2 from "../assets/img/smota-jumbotron-2.jpg";
import smota_jubotron_3 from "../assets/img/smota-jumbotron-3.jpg";
import LinkGrid from "../components/LinkGrid";
import { DummyCategories, DummyLinks } from "../dummy/DummyHomeScreenLinkProvider";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const HomeScreen: React.FC = () => {
  let gridComponents = DummyCategories.map((category) => 
    <LinkGrid links={DummyLinks[category]} header={category} />);
  return(
    <>
      <div style={{marginBottom: 8}}>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          interval={5000}
          showArrows={false}
          showThumbs={false}
          showIndicators={false}
          showStatus={false}>
          <div>
            <img src={smota_jubotron_1} style={styles.image} alt="St Mary of the Angels Singapore" />
          </div>
          <div>
            <img src={smota_jubotron_2} style={styles.image} alt="St Mary of the Angels Singapore" />
          </div>
          <div>
            <img src={smota_jubotron_3} style={styles.image} alt="St Mary of the Angels Singapore" />
          </div>
        </Carousel>
      </div>
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