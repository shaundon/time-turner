// @flow

import { describeEventTimeInWords } from './time-functions';

describe('describeEventTimeInWords', () => {
  it('should error when startDate is after endDate', () => {
    const now = new Date(2010, 1, 1, 0, 0, 0);
    const start = new Date(2020, 1, 1, 0, 0, 0);
    const end = new Date(2019, 1, 1, 0, 0, 0);
    expect(() => {
      describeEventTimeInWords(now, start, end);
    }).toThrowError();
  });

  it(`should say "less than a minute"`, () => {
    const now = new Date(2019, 4, 4, 10, 59, 15);
    const start = new Date(2019, 4, 4, 11, 0, 0);
    const end = new Date(2019, 4, 4, 11, 30, 0);
    expect(describeEventTimeInWords(now, start, end)).toEqual(
      'Starts in less than a minute',
    );
  });

  it(`should say "1 minute"`, () => {
    const now = new Date(2019, 4, 4, 10, 59, 0);
    const start = new Date(2019, 4, 4, 11, 0, 0);
    const end = new Date(2019, 4, 4, 11, 30, 0);
    expect(describeEventTimeInWords(now, start, end)).toEqual(
      'Starts in 1 minute',
    );
  });

  it(`should say "42 minutes"`, () => {
    const now = new Date(2019, 4, 4, 10, 18, 0);
    const start = new Date(2019, 4, 4, 11, 0, 0);
    const end = new Date(2019, 4, 4, 11, 30, 0);
    expect(describeEventTimeInWords(now, start, end)).toEqual(
      'Starts in 42 minutes',
    );
  });

  it(`should say "11:00 - 11:30"`, () => {
    const now = new Date(2019, 4, 4, 9, 9, 0);
    const start = new Date(2019, 4, 4, 11, 0, 0);
    const end = new Date(2019, 4, 4, 11, 30, 0);
    expect(describeEventTimeInWords(now, start, end)).toEqual('11:00 - 11:30');
  });
});
