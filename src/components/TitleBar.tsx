import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useHistory } from "react-router-dom";
import smota_logo from "../assets/img/smota-logo-full.png";
import AppUpdateNotification from '../components/notifications/AppUpdate';
import InstallToHomeScreenNotification from '../components/notifications/InstallToHomeScreen';

interface Props {
    backEnabled: boolean,
    isInstallAvailable: boolean,
    deferredPrompt: { prompt: () => void; },
    isUpdateAvailable: boolean,
    title?: string,
}
const TitleBar: React.FC<Props> = ({backEnabled, isInstallAvailable, deferredPrompt, isUpdateAvailable, title}) => {
    const history = useHistory();
    return (
        <>
            <div style={{position: "fixed", top: 0, left: 0, width: "100%", zIndex: 1000}}>
                <AppUpdateNotification isUpdateAvailable={isUpdateAvailable} />
                <InstallToHomeScreenNotification isInstallAvailable={isInstallAvailable} deferredPrompt={deferredPrompt} />
                <div
                    style={{backgroundColor: "var(--primary)", display: "flex", flexDirection:"row", alignItems: "center", paddingBottom: 4, paddingTop: 4, width: "100%", height: 60}}>
                    {
                        backEnabled
                            ? <div style={{width: 32, height: 32, cursor: "pointer"}}>
                                <FontAwesomeIcon
                                    icon={faArrowLeft}
                                    color="white"
                                    size="lg"
                                    style={{position: "relative", top: 6, left: 14}}
                                    onClick={() => {history.goBack()}} />
                              </div>
                            : null
                    }
                    {
                        title !== undefined
                            ? <span style={{color: "var(--primary-text-on-media)", paddingLeft: 8, fontSize: 18}}>{title}</span>
                            : <img src={smota_logo} width="50%" alt="SMOTA Logo" />
                    }
                </div>
            </div>
            <AppUpdateNotification isUpdateAvailable={isUpdateAvailable} />
            <InstallToHomeScreenNotification isInstallAvailable={isInstallAvailable} deferredPrompt={deferredPrompt} />
            <div style={{width: "100%", height: 60}} />
        </>
    );
}

export default TitleBar;