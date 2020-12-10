import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import ReactGA from 'react-ga';

import '../src/styles/styles.scss';
import GlobalStyle from './styles/02_tools/styled_component/GlobalStyle';
import lightTheme from './styles/02_tools/styled_component/lightTheme';
import darkTheme from './styles/02_tools/styled_component/darkTheme';

import Home from './pages/Home';
import AboutMe from './pages/AboutMe';

import Weddell from './pages/projects/Weddell';
import FoodTruck from './pages/projects/FoodTruck.js';
import Retriever from './pages/projects/Retriever';
import PageNotFound from './pages/PageNotFound';

function initializeAnalytics() {
  ReactGA.initialize('UA-157872672-1');
  ReactGA.pageview(window.location.pathname + window.location.search);
}

function App() {
  initializeAnalytics();

  // toggle theme
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  console.log('APP');
  console.log(toggleTheme);
  return (
    // <h1>Site under construction</h1>
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/about-me" render={() => <AboutMe />} />

          <Route path="/weddell" render={() => <Weddell />} />
          <Route path="/food-truck-finder" render={() => <FoodTruck />} />
          <Route path="/retriever-app" render={() => <Retriever />} />

          <Route path="/" render={() => <PageNotFound />} />
        </Switch>
      </div>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
