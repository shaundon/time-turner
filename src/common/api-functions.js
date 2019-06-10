import { Client } from '@microsoft/microsoft-graph-client';

import { getStartOfToday, getStartOfTomorrow } from './time-functions';

const getAuthenticatedClient = accessToken => {
  const client = Client.init({
    authProvider: done => {
      done(null, accessToken.accessToken);
    },
  });
  return client;
};

const getUserDetails = async accessToken => {
  const client = getAuthenticatedClient(accessToken);

  const user = await client.api('/me').get();
  return user;
};

const getEvents = async accessToken => {
  const client = getAuthenticatedClient(accessToken);

  const events = await client
    .api(
      `/me/calendar/calendarView?startDateTime=${getStartOfToday().toDateString()}&endDateTime=${getStartOfTomorrow().toDateString()}`,
    )
    .filter(
      `isAllDay eq false and
      isCancelled eq false`,
    )
    .select('subject,organizer,start,end,body,bodyPreview')
    .orderby('start/dateTime ASC')
    .get();

  return events;
};

export { getUserDetails, getEvents };
