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
}
const TitleBar: React.FC<Props> = ({backEnabled, isInstallAvailable, deferredPrompt, isUpdateAvailable}) => {
    const history = useHistory();
    return (
        <>
            <div style={{position: "fixed", top: 0, left: 0, zIndex: 1000}}>
                <AppUpdateNotification isUpdateAvailable={isUpdateAvailable} />
                <InstallToHomeScreenNotification isInstallAvailable={isInstallAvailable} deferredPrompt={deferredPrompt} />
                <div
                    style={{backgroundColor: "var(--primary)", display: "flex", flexDirection:"row", alignItems: "center", paddingBottom: 4, paddingTop: 4}}>
                    {
                        backEnabled
                            ? <div style={{width: 32, height: 32, cursor: "pointer"}}>
                                <FontAwesomeIcon
                                    icon={faArrowLeft}
                                    color="white"
                                    size="lg"
                                    style={{position: "relative", top: 8, left: 14}}
                                    onClick={() => {history.goBack()}} />
                              </div>
                            : null
                    }
                <img src={smota_logo} width="50%" alt="SMOTA Logo" />
            </div>
            </div>
            <AppUpdateNotification isUpdateAvailable={isUpdateAvailable} />
            <InstallToHomeScreenNotification isInstallAvailable={isInstallAvailable} deferredPrompt={deferredPrompt} />
            <img src={smota_logo} width="50%" alt="SMOTA Logo" />
        </>
    );
}

export default TitleBar;