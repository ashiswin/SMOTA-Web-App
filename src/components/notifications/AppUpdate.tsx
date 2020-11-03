import React from 'react';
import { Button } from 'react-materialize';

interface Props {
  isUpdateAvailable: boolean,
}

const refreshApp = () => {
  window.location.reload();
}

const AppUpdateNotification: React.FC<Props> = ({ isUpdateAvailable }) => {
  if (isUpdateAvailable) {
    return (
      <div id="service-worker-update">
        <div style={{backgroundColor: 'var(--primary-dark)', padding: 16, color: 'var(--icons)'}}>
          <div className='text'>
            An update for the Saint Mary of the Angels app is available. Please restart the app to start using it immediately.
          </div>
          <br />
          <div className='action'>
            <Button onClick={refreshApp} style={{width: '100%'}} className="waves-effect green">Restart App</Button>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default AppUpdateNotification;