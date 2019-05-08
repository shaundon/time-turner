// @flow

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Events from './components/events';
import Settings from './components/settings';

const AppRouter = () => (
  <Router>
    <Route path="/" component={Settings} exact />
    <Route path="/events" component={Events} />
  </Router>
);

export default AppRouter;
