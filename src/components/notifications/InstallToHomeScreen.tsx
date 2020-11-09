import React, { useState } from 'react';
import { Button } from 'react-materialize';

interface Props {
  isInstallAvailable: boolean,
  deferredPrompt: { prompt: () => void; },
}

const InstallToHomeScreenNotification: React.FC<Props> = ({ isInstallAvailable, deferredPrompt }) => {
  const [visible, setVisible] = useState(isInstallAvailable);
  const closePrompt = () => {
    setVisible(false);
  };
  const installApp = () => {
    deferredPrompt.prompt();
    closePrompt();
  }

  if (visible) {
    return (
      <div id="service-worker-update">
        <div style={{backgroundColor: 'var(--primary-dark)', padding: 16, color: 'var(--icons)'}}>
          <div className='text'>
            Install the St Mary's app to your phone for easier access.
          </div>
          <br />
          <div className='action'>
            <Button onClick={() => {installApp()}} style={{width: '100%'}} className="waves-effect green">Install App</Button>
          </div>
          <div style={{position: 'absolute', top: 8, right: 8, zIndex: 1}}>
            <a href="#!" onClick={() => closePrompt()} style={{textDecoration: 'none', color: "white"}}>
              <i className="material-icons">cancel</i>
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default InstallToHomeScreenNotification;