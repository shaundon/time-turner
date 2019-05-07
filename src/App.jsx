// @flow

import React from 'react';

import Card from './components/card';
import STYLES from './App.scss';

const c = className => STYLES[className] || 'UNKNOWN';

const startDate = new Date(2019, 6, 6, 11, 0, 0);
const endDate = new Date(2019, 6, 6, 12, 0, 0);

const App = () => (
  <main className={c('App__main')}>
    <Card
      title="Stand up"
      description="The event description is this."
      startDate={startDate}
      endDate={endDate}
    />
  </main>
);

export default App;
