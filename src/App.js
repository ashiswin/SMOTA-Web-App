/* eslint-disable jsx-a11y/anchor-is-valid */
import M from 'materialize-css/dist/js/materialize.min.js';
import React, { lazy, Suspense, useEffect, useContext } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import smota_logo from './assets/img/smota-logo.png';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { SideNavItem } from 'react-materialize';
import AppUpdateNotification from './components/notifications/AppUpdate';
import InstallToHomeScreenNotification from './components/notifications/InstallToHomeScreen';
import { UserContext } from './providers/UserProvider';
import CryptoJS from 'crypto-js';
const MassVideoListScreen = lazy(() => import("./screens/MassVideoListScreen"));
const AboutScreen = lazy(() => import("./screens/AboutScreen"));
const HomeScreen = lazy(() => import("./screens/HomeScreen"));
const SignUpScreen = lazy(() => import("./screens/SignUpScreen"));

const App = ({ isUpdateAvailable, isInstallAvailable, deferredPrompt }) => {
  const user = useContext(UserContext);
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
        <div className='App'>
          <div className="navbar-fixed">
            <nav style={{backgroundColor: 'var(--primary)'}}>
              <a href="#" data-target="slide-out" className="sidenav-trigger show-on-large"><i className="material-icons">menu</i></a>
              <a href="#" className="brand-logo">St Mary of the Angels</a>
            </nav>
          </div>
          <ul id="slide-out" className="sidenav">
            {
              user !== null
                ? <SideNavItem userView
                    user={{
                      background: 'https://i.pinimg.com/originals/ba/a1/b4/baa1b43d07f737c2b1cb88611f111952.jpg',
                      image: `https://www.gravatar.com/avatar/${CryptoJS.MD5(user.email)}?d=identicon`,
                      name: user.displayName,
                      email: user.email
                    }}
                  />
                : <>
                    <li>
                      <a>
                        <i><img src={smota_logo} alt="Saint Mary of the Angels logo" height={36} style={{verticalAlign: "middle"}} /></i>
                        <span style={{verticalAlign: "middle", height: "100%", display: "inline-block"}}>St Mary of the Angels</span>
                      </a>
                    </li>
                    <SideNavItem divider />
                  </>
            }
            <li><Link to="/" className="sidenav-close"><i className="material-icons">home</i> Home</Link></li>
            <li className="no-padding">
              <ul className="collapsible collapsible-accordion">
                <li>
                  <a className="collapsible-header">Online Content<i className="material-icons">arrow_drop_down</i></a>
                  <div className="collapsible-body">
                    <ul>
                    <li><Link to="/holy-mass" className="sidenav-close" ><i className="material-icons">play_circle_filled</i> Holy Mass</Link></li>
                    <li><Link to="/daily-liturgy" className="sidenav-close" ><i className="material-icons">play_circle_filled</i> Daily Liturgy</Link></li>
                    </ul>
                  </div>
                </li>
              </ul>
            </li>
            <SideNavItem divider />
            <li><Link to="/about" className="sidenav-close"><i className="material-icons">info</i> About</Link></li>
          </ul>
        </div>
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
          <Route path="/">
            <HomeScreen />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;