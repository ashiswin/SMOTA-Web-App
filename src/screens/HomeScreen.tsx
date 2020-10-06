import React from "react";
import smota_large from "../assets/img/smota-jumbotron.jpg";
import LinkGrid from "../components/LinkGrid";

const HomeScreen: React.FC = () => (
    <div>
        <img src={smota_large} style={styles.image} alt="St Mary of the Angels Singapore" />
        <LinkGrid />
    </div>
);

const styles = {
    image: {
        width: "100%"
    }
}

export default HomeScreen;