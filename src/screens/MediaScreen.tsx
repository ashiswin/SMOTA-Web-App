import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row } from "react-materialize";
import TitleBar from "../components/TitleBar";
import VideoListItem, { VideoDetails } from "../components/VideoListItem";
import { DummyPlaylistIds } from "../dummy/DummyVideoIdProvider";

interface Props {
    isInstallAvailable: boolean,
    deferredPrompt: { prompt: () => void; },
    isUpdateAvailable: boolean,
}

const MediaScreen: React.FC<Props> = ({isInstallAvailable, deferredPrompt, isUpdateAvailable}) => {
    const [videoDetails, setVideoDetails] = useState<{holy_mass: VideoDetails[], daily_liturgy: VideoDetails[]}>({holy_mass: [], daily_liturgy: []});

    useEffect(() => {
        ["holy_mass", "daily_liturgy"].map((videoType: string) => {
            const playlistId = DummyPlaylistIds[videoType];
            const requestURL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=${videoType === "holy_mass" ? 2 : 4}&playlistId=${playlistId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;
            axios.get(requestURL)
            .then(res => {
                const response = res.data.items;
                let videos = response.map((item: { snippet: { title: string; resourceId: { videoId: string; }; description: string; thumbnails: { maxres: { url: string; }; high: { url: string; }; }; }; }) => {
                    if (item.snippet.title === "Private video") {
                        return null;
                    }
                    let titleParts = item.snippet.title.split(" - ");
                    console.log(item.snippet.title);
                    return {
                        id: item.snippet.resourceId.videoId,
                        title: titleParts[1],
                        date: titleParts[2],
                        description: item.snippet.description,
                        thumbnail: item.snippet.thumbnails.maxres?.url ?? item.snippet.thumbnails.high.url,
                    };
                })
                .filter((item: VideoDetails) => item);
                setVideoDetails(v => {return {...v, [videoType]: videos}});
            })
            .catch(reason => {
                console.log(reason);
            });
            return true;
        });
    }, []);

    return (
        <>
            <TitleBar 
                backEnabled={true}
                title="Media"
                isInstallAvailable={isInstallAvailable}
                deferredPrompt={deferredPrompt}
                isUpdateAvailable={isUpdateAvailable} />
            <Container>
                <h4>Holy Mass</h4>
                <Row>
                    <>
                        {
                            videoDetails.holy_mass.length !== 0
                                ? <VideoListItem {...videoDetails.holy_mass[0]} key={videoDetails.holy_mass[0].id} />
                                : null
                        }
                        <div style={{width: "100%", marginBottom: 16}}>
                            <a 
                                href="#!"
                                onClick={() => window.open(`https://www.youtube.com/playlist?list=${DummyPlaylistIds["holy_mass"]}`)}
                                className="waves-effect waves-light btn blue"
                                style={{width: "100%"}}>
                                See All Videos
                            </a>
                        </div>
                    </>
                </Row>
                <h4>Daily Liturgy</h4>
                {
                    videoDetails.daily_liturgy.slice(0, 3).map(videoDetail => {
                        return (
                            <Row>
                                <VideoListItem {...videoDetail} key={videoDetail.id} />
                            </Row>
                        );
                    })
                }
                <div style={{width: "100%", marginBottom: 16}}>
                    <a 
                        href="#!"
                        onClick={() => window.open(`https://www.youtube.com/playlist?list=${DummyPlaylistIds["daily_liturgy"]}`)}
                        className="waves-effect waves-light btn blue"
                        style={{width: "100%"}}>
                        See All Videos
                    </a>
                </div>
            </Container>
        </>
    );
}

export default MediaScreen;