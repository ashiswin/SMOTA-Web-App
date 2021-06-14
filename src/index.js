import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import MetaTags from 'react-meta-tags';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import UserProvider from './providers/UserProvider';

const AppEntry = () => {
  const [updateAvailable, setIsUpdateAvailable] = useState(false);
  const [installAvailable, setInstallAvailable] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  const config = {
    onUpdate: registration => {
      console.warn('Service worker update available');
      console.log(registration);

      setIsUpdateAvailable(true);

      if (registration.waiting) {
        registration.waiting.postMessage({ type: "SKIP_WAITING" });
      }
    },
    onSuccess: registration => {
      console.warn('Service worker registered');
      console.log(registration);
    }
  };

  useEffect(() => {
    serviceWorker.register(config);
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setInstallAvailable(true);
    });
  }, [config]);

  return (
    <UserProvider>
      <App isUpdateAvailable={updateAvailable} isInstallAvailable={installAvailable} deferredPrompt={deferredPrompt} />
    </UserProvider>);
}

ReactDOM.render(
  <React.StrictMode>
    <MetaTags>
      <meta name="theme-color" content="#03C" />
    </MetaTags>
    <AppEntry />
  </React.StrictMode>,
  document.getElementById('root')
);
