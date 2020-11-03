import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Preloader } from "react-materialize";
import VideoListItem, { VideoDetails } from "../components/VideoListItem";
import { DummyPlaylistIds } from "../dummy/DummyVideoIdProvider";

interface Props {
  isSundayMass: boolean,
}

const MassVideoListScreen: React.FC<Props> = ({ isSundayMass }) => {
  console.log(process.env.REACT_APP_YOUTUBE_API_KEY);
  const [videoDetails, setVideoDetails] = useState([]);
  const [pageToken, setPageToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getVideoData = () => {
      let playlist_id = DummyPlaylistIds[isSundayMass ? "holy_mass" : "daily_liturgy"];
      const requestURL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=5&playlistId=${playlist_id}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;
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
      {
        isLoading
          ? null
          : videoComponents
      }
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
      {
        isLoading
          ? null
          : <div style={{width: "100%", marginBottom: 16}}>
              <a 
                href="#!"
                onClick={() => window.open(`https://www.youtube.com/playlist?list=${DummyPlaylistIds[isSundayMass ? "holy_mass" : "daily_liturgy"]}`)}
                className="waves-effect waves-light btn"
                style={{width: "100%"}}>
                See All Videos
              </a>
            </div>
      }
    </Container>
  );
}

export default MassVideoListScreen;