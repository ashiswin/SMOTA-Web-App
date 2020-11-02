import React from "react";
import { Container, Col, Row } from "react-materialize";
import VideoListItem from "../components/VideoListItem";

interface Props {
  isSundayMass: boolean,
}

const MassVideoListScreen: React.FC<Props> = ({ isSundayMass }) => {
  return (
    <Container>
      <h4>{isSundayMass ? "Holy Mass" : "Daily Liturgy"}</h4>
      <VideoListItem video_id="rJJosugYc5E" />
      <VideoListItem video_id="2U3uZnrXqPE" />
    </Container>
  );
}

export default MassVideoListScreen;