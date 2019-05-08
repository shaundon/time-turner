// @flow

const padNumber = (input: number): string =>
  input < 10 ? `0${input}` : input.toString();

const getMinutesBetweenNowAndStartTime = (now: Date, startDate: Date): number =>
  (startDate - now) / 1000 / 60;

const getEventTimes = (startDate: Date, endDate: Date): string =>
  `${padNumber(startDate.getHours())}:${padNumber(
    startDate.getMinutes(),
  )} - ${padNumber(endDate.getHours())}:${padNumber(endDate.getMinutes())}`;

export { getEventTimes, getMinutesBetweenNowAndStartTime };
