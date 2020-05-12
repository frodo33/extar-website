import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { createGlobalStyle } from 'styled-components';
// import styled from 'styled-components/macro';

import { Navbar } from 'components/base/Navbar';
import { Footer } from 'components/Footer';
import { HomePage } from 'components/pages/HomePage';
import { ApartmentsPage } from 'components/pages/ApartmentsPage';
// import { PricesPage } from 'components/pages/PricesPage';
// import { FAQPage } from 'components/pages/FAQPage';
import { ContactPage } from 'components/pages/ContactPage';

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

        .container {
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 15px;
        }
    } 
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/apartments" component={ApartmentsPage} />
          <Route path="/contact" component={ContactPage} />
          <Route render={() => <Redirect to={{pathname: "/"}} />} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
