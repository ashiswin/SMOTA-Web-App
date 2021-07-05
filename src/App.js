/* eslint-disable jsx-a11y/anchor-is-valid */
import M from 'materialize-css/dist/js/materialize.min.js';
import React, { lazy, Suspense, useEffect } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MediaScreen from './screens/MediaScreen';
import BulletinScreen from './screens/BulletinScreen';
import WhatsOnScreen from './screens/WhatsOnScreen';
const AboutScreen = lazy(() => import("./screens/AboutScreen"));
const HomeScreen = lazy(() => import("./screens/HomeScreen"));
const SignUpScreen = lazy(() => import("./screens/SignUpScreen"));
const SignInScreen = lazy(() => import("./screens/SignInScreen"));
const PasswordResetScreen = lazy(() => import("./screens/PasswordResetScreen"));
const TodayScreen = lazy(() => import("./screens/TodayScreen"));

const App = ({ isUpdateAvailable, isInstallAvailable, deferredPrompt }) => {
  useEffect(() => {
    let sidenav = document.querySelector('#slide-out');
    M.Sidenav.init(sidenav, {});
    M.AutoInit();
  });

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/about">
            <AboutScreen />
          </Route>
          <Route path="/media">
            <MediaScreen 
              isInstallAvailable={isInstallAvailable} 
              deferredPrompt={deferredPrompt} 
              isUpdateAvailable={isUpdateAvailable} />
          </Route>
          <Route path="/bulletin">
            <BulletinScreen 
              isInstallAvailable={isInstallAvailable} 
              deferredPrompt={deferredPrompt} 
              isUpdateAvailable={isUpdateAvailable} />
          </Route>
          <Route path="/signup">
            <SignUpScreen />
          </Route>
          <Route path="/signin">
            <SignInScreen />
          </Route>
          <Route path="/passwordReset">
            <PasswordResetScreen />
          </Route>
          <Route path="/today">
            <TodayScreen />
          </Route>
          <Route path="/whatson">
            <WhatsOnScreen 
              isInstallAvailable={isInstallAvailable} 
              deferredPrompt={deferredPrompt} 
              isUpdateAvailable={isUpdateAvailable} />
          </Route>
          <Route path="/">
            <HomeScreen 
              isInstallAvailable={isInstallAvailable} 
              deferredPrompt={deferredPrompt} 
              isUpdateAvailable={isUpdateAvailable} />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;