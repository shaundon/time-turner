// @flow

import React from 'react';

import Card from './components/card';
import STYLES from './App.scss';

const c = className => STYLES[className] || 'UNKNOWN';

const App = () => (
  <main className={c('App__main')}>
    <Card
      title="Title of first meeting"
      description="The event description is this."
      startDate={new Date(2019, 6, 6, 11, 0, 0)}
      endDate={new Date(2019, 6, 6, 11, 10, 0)}
    />
    <Card
      title="Title of second meeting"
      description="The event description is this."
      startDate={new Date(2019, 6, 6, 11, 15, 0)}
      endDate={new Date(2019, 6, 6, 12, 0, 0)}
    />
  </main>
);

export default App;
