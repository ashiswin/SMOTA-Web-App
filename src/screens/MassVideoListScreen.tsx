import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Preloader } from "react-materialize";
import VideoListItem from "../components/VideoListItem";
import { DummyPlaylistIds } from "../dummy/DummyVideoIdProvider";

interface Props {
  isSundayMass: boolean,
}

interface VideoDetails {
  id: string,
  title: string,
  date: string,
  description: string,
  thumbnail: string,
}

const API_KEY = "AIzaSyB2P2HY-eKk02NR2qg939I6FcaqYeXuHgM";

const MassVideoListScreen: React.FC<Props> = ({ isSundayMass }) => {
  const [videoDetails, setVideoDetails] = useState([]);
  const [pageToken, setPageToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getVideoData = () => {
      let playlist_id = DummyPlaylistIds[isSundayMass ? "holy_mass" : "daily_liturgy"];
      const requestURL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=5&playlistId=${playlist_id}&key=${API_KEY}`;
      axios.get(requestURL)
        .then(res => {
          const response = res.data.items;
          let responseIds = response
            .map((item: { snippet: { title: string; resourceId: { videoId: string; }; description: string; thumbnails: { maxres: { url: string; }; }; }; }) => {
              if (item.snippet.title === "Private video") {
                return null;
              }
              let titleParts = item.snippet.title.split(" - ");
              return {
                id: item.snippet.resourceId.videoId,
                title: titleParts[1],
                date: titleParts[2],
                description: item.snippet.description,
                thumbnail: item.snippet.thumbnails.maxres.url,
              };
            })
            .filter((item: VideoDetails) => item);
            setVideoDetails(responseIds);
            setPageToken(res.data.pageToken ?? "");
            setIsLoading(false);
        })
        .catch(reason => {
          console.log(reason);
        });
    }

    setIsLoading(true);
    getVideoData();
  }, [isSundayMass]);

  let videoComponents = videoDetails.map((details) => <VideoListItem {...details} />);
  console.log(pageToken);

  return (
    <Container>
      <h4>{isSundayMass ? "Holy Mass" : "Daily Liturgy"}</h4>
      {videoComponents}
      {
        isLoading
          ? <Row>
              <Col s={4} offset="s4">
                <Preloader
                  active
                  color="blue"
                  flashing
                />
              </Col>
            </Row>
        : null
      }
    </Container>
  );
}

export default MassVideoListScreen;