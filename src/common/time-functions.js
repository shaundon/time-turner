// @flow

const padNumber = (input: number): string =>
  input < 10 ? `0${input}` : input.toString();

const getMinutesBetweenNowAndStartTime = (now: Date, startDate: Date): number =>
  (startDate - now) / 1000 / 60;

const getEventTimes = (startDate: Date, endDate: Date): string =>
  `${padNumber(startDate.getHours())}:${padNumber(
    startDate.getMinutes(),
  )} - ${padNumber(endDate.getHours())}:${padNumber(endDate.getMinutes())}`;

const getStartOfToday = () => {
  const now = new Date();
  const midnightToday = now.setHours(0, 0, 0, 0);
  return new Date(midnightToday);
};

const getStartOfTomorrow = () => {
  const now = new Date();
  const midnightTomorrow = now.setHours(24, 0, 0, 0);
  return new Date(midnightTomorrow);
};

export {
  getEventTimes,
  getMinutesBetweenNowAndStartTime,
  getStartOfToday,
  getStartOfTomorrow,
};
