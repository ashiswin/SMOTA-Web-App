import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row } from "react-materialize";
import TitleBar from "../components/TitleBar";
import VideoListItem, { VideoDetails } from "../components/VideoListItem";
import { DummyPlaylistIds } from "../dummy/DummyVideoIdProvider";

interface Props {
    isInstallAvailable: boolean,
    deferredPrompt: { prompt: () => void; },
    isUpdateAvailable: boolean,
}

const MediaScreen: React.FC<Props> = ({isInstallAvailable, deferredPrompt, isUpdateAvailable}) => {
    const [videoDetails, setVideoDetails] = useState<{holy_mass: null | VideoDetails, daily_liturgy: null | VideoDetails}>({holy_mass: null, daily_liturgy: null});

    useEffect(() => {
        ["holy_mass", "daily_liturgy"].map((videoType: string) => {
            const playlistId = DummyPlaylistIds[videoType];
            const requestURL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=2&playlistId=${playlistId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;
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
                setVideoDetails(v => {return {...v, [videoType]: videos[0]}});
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
            <Row>
                {
                    videoDetails.holy_mass !== null
                        ? <VideoListItem {...videoDetails.holy_mass} key={videoDetails.holy_mass.id} />
                        : null
                }
            </Row>
            <Row>
                {
                    videoDetails.daily_liturgy !== null
                        ? <VideoListItem {...videoDetails.daily_liturgy} key={videoDetails.daily_liturgy.id} />
                        : null
                }
            </Row>
        </>
    );
}

export default MediaScreen;