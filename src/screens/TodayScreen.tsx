import BottomTabNavigation from '../components/BottomTabNavigation';
import React, { useState } from "react";
import axios from 'axios';
import TitleBar from '../components/TitleBar';

const TodayScreen: React.FC = () => {
    const [content, setContent] = useState("");
    axios.get("https://smota-backend.herokuapp.com/today").then((response) => {
        setContent(response.data);
    });
    return (
        <>
            <TitleBar isInstallAvailable={false} isUpdateAvailable={false} deferredPrompt={{prompt: () => {}}} backEnabled={false} />
            <div style={{display: "flex", flexDirection: "column", padding: 16, textAlign: "left", fontFamily: "serif"}} dangerouslySetInnerHTML={{__html: content}}>
            </div>
            <BottomTabNavigation />
        </>
    );
}

export default TodayScreen;