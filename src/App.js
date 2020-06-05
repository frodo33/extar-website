import React, { useState, useEffect } from 'react';
import {
  Switch,
  Route,
  Redirect,
  withRouter
} from "react-router-dom";
import { createGlobalStyle } from 'styled-components';
// import styled from 'styled-components/macro';
import firebase from 'firebase';

import { Navbar } from 'components/base/Navbar';
import { Footer } from 'components/Footer';
import { HomePage } from 'components/pages/HomePage';
// import { ApartmentsPage } from 'components/pages/ApartmentsPage';
import { PricesPage } from 'components/pages/PricesPage';
// import { FAQPage } from 'components/pages/FAQPage';
import { ContactPage } from 'components/pages/ContactPage';
import { Login } from 'components/Login';
import { Dashboard } from 'components/Dashboard';

const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    html {
        font-size: 62.5%;
    }
    body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
        "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        min-height: 100vh;

        .container {
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 15px;
        }
    } 
`;

const onAuthStateChange = (callback) => {
  return firebase.auth().onAuthStateChanged(user => {
    user ? callback(true) : callback(false)
  });
}

const App = ({ location }) => {
  const exclusionArray = [
    '/login',
    '/dashboard'
  ]
  const [user, setUser] = useState(false);
  useEffect( () => {
    const unsubscribe = onAuthStateChange(setUser);
    return () => unsubscribe()
  }, [])
  return (
    <>
      <GlobalStyle />
      { exclusionArray.indexOf(location.pathname) < 0 && <Navbar /> }
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/prices" component={PricesPage} />
        <Route path="/contact" component={ContactPage} />    
        <Route path="/dashboard" render={ () => user ? <Dashboard /> : <Login /> } />
        <Route render={() => <Redirect to={{pathname: "/"}} />} />
      </Switch>
      { exclusionArray.indexOf(location.pathname) < 0 && <Footer /> }
    </>
  );
}

export default withRouter(App);

// <Route path="/apartments" component={ApartmentsPage} />
// <Route path="/FAQ" component={FAQPage} />