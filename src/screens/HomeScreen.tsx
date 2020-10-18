import React from "react";
import smota_large from "../assets/img/smota-jumbotron.jpg";
import LinkGrid from "../components/LinkGrid";
import { DummyCategories, DummyLinks } from "../dummy/DummyHomeScreenLinkProvider";

const HomeScreen: React.FC = () => {
    let gridComponents = DummyCategories.map((category) => 
        <LinkGrid links={DummyLinks[category]} header={category} />);
    return(
        <div>
            <img src={smota_large} style={styles.image} alt="St Mary of the Angels Singapore" />
            {gridComponents}
        </div>
    );
}

const styles = {
    image: {
        width: "100%",
        marginBottom: 8,
    }
}

export default HomeScreen;