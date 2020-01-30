import React from 'react';
import { Route, Switch } from 'react-router-dom';

import '../src/styles/styles.scss';

import Home from './pages/Home';
import AboutMe from './pages/AboutMe';

import Weddell from './pages/projects/Weddell';
import FoodTruck from './pages/projects/FoodTruck.js';
import Retriever from './pages/projects/Retriever';
import AmazingPlanter from './pages/projects/AmazingPlanter';
import Waymo from './pages/projects/Waymo';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/about-me" render={() => <AboutMe />} />

        {/* work-section */}
        <Route path="/weddell" render={() => <Weddell />} />
        <Route path="/food-truck-finder" render={() => <FoodTruck />} />
        <Route path="/retriever-app" render={() => <Retriever />} />
        <Route path="/amazing-planter" render={() => <AmazingPlanter />} />
        <Route path="/waymo" render={() => <Waymo />} />
        <Route path="/" render={() => <PageNotFound />} />
        {/* <Route path="/amen" render={() => <Amen />} /> */}
      </Switch>
    </div>
  );
}

export default App;
