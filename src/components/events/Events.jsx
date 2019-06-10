// @flow

import React, { Component } from 'react';

import CurrentEvent from '../current-event';
import LaterEvent from '../later-event';
import {
  getAccessToken,
  getUserAgentApplication,
} from '../../common/auth-functions';
import { getEvents } from '../../common/api-functions';

import STYLES from './Events.scss';

const c = className => STYLES[className] || 'UNKNOWN';

class Events extends Component {
  constructor() {
    super();
    this.state = {
      events: null,
    };
  }

  async componentDidMount() {
    const userAgentApplication = getUserAgentApplication();
    if (userAgentApplication) {
      const accessToken = await getAccessToken(userAgentApplication);
      const events = await getEvents(accessToken);
      this.setState({
        events: events.value,
      });
    }

    // TODO sort this out.
    window.setTimeout(() => window.location.reload(), 120000);
  }

  /*
  Event format:

  subject: string,
  start: { dateTime: Date, timeZone: string },
  end: { dateTime: Date, timeZone: string },
  organizer: {
    emailAddress: { name: string, address: string },
  },

  */

  render() {
    const { events } = this.state;
    console.log(events);
    if (!events) {
      return <p>Getting events..</p>;
    }
    if (events.length === 0) {
      return <p>No events</p>;
    }

    const nextEvent = events.splice(0, 1)[0];

    return (
      <main className={c('events__main')}>
        <CurrentEvent
          title={nextEvent.subject}
          description="todo"
          startDate={new Date(nextEvent.start.dateTime)}
          endDate={new Date(nextEvent.end.dateTime)}
        />
        {events.map(event => (
          <LaterEvent
            key={event.id}
            title={event.subject}
            startDate={new Date(event.start.dateTime)}
            endDate={new Date(event.end.dateTime)}
          />
        ))}
      </main>
    );
  }
}

export default Events;
