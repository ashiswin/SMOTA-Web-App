import React from 'react';
import { Container } from 'react-materialize';
import { useHistory } from 'react-router-dom';
import BottomTabNavigation from '../components/BottomTabNavigation';
import TitleBar from '../components/TitleBar';

interface Props {
    isInstallAvailable: boolean,
    deferredPrompt: { prompt: () => void; },
    isUpdateAvailable: boolean,
}

const WhatsOnScreen: React.FC<Props> = ({isInstallAvailable, deferredPrompt, isUpdateAvailable}) => {
    const history = useHistory();

    return (
        <>
            <TitleBar 
                isInstallAvailable={isInstallAvailable} 
                isUpdateAvailable={isUpdateAvailable} 
                deferredPrompt={deferredPrompt} 
                backEnabled={false} />
            <Container>
                <a 
                    href="#!"
                    onClick={() => history.push(`/bulletin`)}
                    className="waves-effect waves-light btn blue"
                    style={{width: "100%"}}>
                    Read the Latest Bulletin
                </a>
            </Container>
            <BottomTabNavigation />
        </>
    );
}

export default WhatsOnScreen;