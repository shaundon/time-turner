// @flow

import React from 'react';
import BpkButton from 'bpk-component-button';

import CurrentEvent from '../current-event';
import LaterEvent from '../later-event';

import STYLES from './Events.scss';

const c = className => STYLES[className] || 'UNKNOWN';

const Events = () => (
  <main className={c('events__main')}>
    <CurrentEvent
      title="Title of first meeting"
      description="The event description is this."
      startDate={new Date(2019, 6, 6, 11, 0, 0)}
      endDate={new Date(2019, 6, 6, 11, 10, 0)}
    />
    <LaterEvent
      title="Title of second meeting"
      startDate={new Date(2019, 6, 6, 11, 15, 0)}
      endDate={new Date(2019, 6, 6, 12, 0, 0)}
    />
    <LaterEvent
      title="Title of third meeting"
      startDate={new Date(2019, 6, 6, 14, 0, 0)}
      endDate={new Date(2019, 6, 6, 16, 0, 0)}
    />
  </main>
);

export default Events;
