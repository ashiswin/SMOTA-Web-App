import React from "react";
import { Container } from "react-materialize";
import VideoListItem from "../components/VideoListItem";
import { DummyIds } from "../dummy/DummyVideoIdProvider";

interface Props {
  isSundayMass: boolean,
}

const MassVideoListScreen: React.FC<Props> = ({ isSundayMass }) => {
  let videoComponents = DummyIds[isSundayMass ? "holy_mass" : "daily_liturgy"].map((id) => <VideoListItem video_id={id} />);
  return (
    <Container>
      <h4>{isSundayMass ? "Holy Mass" : "Daily Liturgy"}</h4>
      {videoComponents}
    </Container>
  );
}

export default MassVideoListScreen;