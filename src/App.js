/* eslint-disable jsx-a11y/anchor-is-valid */
import M from 'materialize-css/dist/js/materialize.min.js';
import React, { lazy, Suspense, useEffect } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppUpdateNotification from './components/notifications/AppUpdate';
import InstallToHomeScreenNotification from './components/notifications/InstallToHomeScreen';
import TitleBar from './components/TitleBar';
import BottomTabNavigation from './components/BottomTabNavigation';
import smota_logo from "./assets/img/smota-logo-full.png";
const MassVideoListScreen = lazy(() => import("./screens/MassVideoListScreen"));
const AboutScreen = lazy(() => import("./screens/AboutScreen"));
const HomeScreen = lazy(() => import("./screens/HomeScreen"));
const SignUpScreen = lazy(() => import("./screens/SignUpScreen"));
const SignInScreen = lazy(() => import("./screens/SignInScreen"));
const PasswordResetScreen = lazy(() => import("./screens/PasswordResetScreen"));

const App = ({ isUpdateAvailable, isInstallAvailable, deferredPrompt }) => {
  useEffect(() => {
    let sidenav = document.querySelector('#slide-out');
    M.Sidenav.init(sidenav, {});
    M.AutoInit();
  });

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <AppUpdateNotification isUpdateAvailable={isUpdateAvailable} />
        <InstallToHomeScreenNotification isInstallAvailable={isInstallAvailable} deferredPrompt={deferredPrompt} />
        <TitleBar />
        <div style={{marginBottom: 56}}>
          <img src={smota_logo} width="50%" alt="SMOTA Logo" />
          <Switch>
            <Route path="/about">
              <AboutScreen />
            </Route>
            <Route path="/holy-mass">
              <MassVideoListScreen isSundayMass={true} />
            </Route>
            <Route path="/daily-liturgy">
              <MassVideoListScreen isSundayMass={false} />
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
            <Route path="/">
              <HomeScreen />
            </Route>
          </Switch>
        </div>
        <BottomTabNavigation />
      </Suspense>
    </Router>
  );
}

export default App;