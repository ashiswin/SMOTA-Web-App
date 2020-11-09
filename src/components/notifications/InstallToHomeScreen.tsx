import React from 'react';
import { Button } from 'react-materialize';

interface Props {
  isInstallAvailable: boolean,
  deferredPrompt: { prompt: () => void; },
}

const installApp = (deferredPrompt: { prompt: () => void; }) => {
  deferredPrompt.prompt();
}

const InstallToHomeScreenNotification: React.FC<Props> = ({ isInstallAvailable, deferredPrompt }) => {
  if (isInstallAvailable) {
    return (
      <div id="service-worker-update">
        <div style={{backgroundColor: 'var(--primary-dark)', padding: 16, color: 'var(--icons)'}}>
          <div className='text'>
            Install the St Mary's app to your phone for easier access.
          </div>
          <br />
          <div className='action'>
            <Button onClick={() => {installApp(deferredPrompt)}} style={{width: '100%'}} className="waves-effect green">Install App</Button>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default InstallToHomeScreenNotification;