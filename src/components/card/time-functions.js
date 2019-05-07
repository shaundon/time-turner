// @flow

const padNumber = (input: number): string =>
  input < 10 ? `0${input}` : input.toString();

const describeEventTimeInWords = (
  now: Date,
  startDate: Date,
  endDate: Date,
): string => {
  if (startDate > endDate) {
    throw new Error('startDate cannot be after endDate');
  }

  const minutesBetweenNowAndStartTime = (startDate - now) / 1000 / 60;
  if (minutesBetweenNowAndStartTime < 1) {
    return 'in less than a minute';
  }
  if (minutesBetweenNowAndStartTime < 60) {
    return `in ${minutesBetweenNowAndStartTime} minute${
      minutesBetweenNowAndStartTime === 1 ? '' : 's'
    }`;
  }

  return `${padNumber(startDate.getHours())}:${padNumber(
    startDate.getMinutes(),
  )} - ${padNumber(endDate.getHours())}:${padNumber(endDate.getMinutes())}`;
};

// eslint-disable-next-line import/prefer-default-export
export { describeEventTimeInWords };

/*
less than a minute
a minute
5 minutes
15 minutes
an hour
a while
*/
