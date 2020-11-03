/* eslint-disable jsx-a11y/anchor-is-valid */
import M from 'materialize-css/dist/js/materialize.min.js';
import React, { lazy, Suspense, useEffect } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import smota_logo from './assets/img/smota-logo.png';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { SideNavItem } from 'react-materialize';
const MassVideoListScreen = lazy(() => import("./screens/MassVideoListScreen"));
const AboutScreen = lazy(() => import("./screens/AboutScreen"));
const HomeScreen = lazy(() => import("./screens/HomeScreen"));

const App = () => {
  useEffect(() => {
    let sidenav = document.querySelector('#slide-out');
    M.Sidenav.init(sidenav, {});
    M.AutoInit();
  });

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <div className='App'>
          <div className="navbar-fixed">
            <nav style={{backgroundColor: 'var(--primary)'}}>
              <a href="#" data-target="slide-out" className="sidenav-trigger show-on-large"><i className="material-icons">menu</i></a>
              <a href="#" className="brand-logo">St Mary of the Angels</a>
            </nav>
          </div>
          <ul id="slide-out" className="sidenav">
            <li>
              <a>
                <i><img src={smota_logo} alt="Saint Mary of the Angels logo" height={36} style={{verticalAlign: "middle"}} /></i>
                <span style={{verticalAlign: "middle", height: "100%", display: "inline-block"}}>St Mary of the Angels</span>
              </a>
            </li>
            <li><SideNavItem divider /></li>
            {/*
            --- Revive this when user profiles are a thing --- 
            <li>
              <SideNavItem userView
                user={{
                  background: 'https://i.pinimg.com/originals/ba/a1/b4/baa1b43d07f737c2b1cb88611f111952.jpg',
                  image: 'data:image/jpeg;base64,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',
                  name: 'John Doe',
                  email: 'jdandturk@gmail.com'
                }}
              />
            </li> */}
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
            <li><SideNavItem divider /></li>
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
          <Route path="/">
            <HomeScreen />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;