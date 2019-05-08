// @flow

const padNumber = (input: number): string =>
  input < 10 ? `0${input}` : input.toString();

const getMinutesBetweenNowAndStartTime = (now: Date, startDate: Date): number =>
  (startDate - now) / 1000 / 60;

const describeEventTimeInWords = (
  now: Date,
  startDate: Date,
  endDate: Date,
): string => {
  if (startDate > endDate) {
    throw new Error('startDate cannot be after endDate');
  }

  const minutesBetweenNowAndStartTime = getMinutesBetweenNowAndStartTime(
    now,
    startDate,
  );
  if (minutesBetweenNowAndStartTime < 1) {
    return 'Starts in less than a minute';
  }
  if (minutesBetweenNowAndStartTime < 60) {
    return `Starts in ${minutesBetweenNowAndStartTime} minute${
      minutesBetweenNowAndStartTime === 1 ? '' : 's'
    }`;
  }

  return `${padNumber(startDate.getHours())}:${padNumber(
    startDate.getMinutes(),
  )} - ${padNumber(endDate.getHours())}:${padNumber(endDate.getMinutes())}`;
};

export { getMinutesBetweenNowAndStartTime, describeEventTimeInWords };
