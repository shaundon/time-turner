// @flow

import React from 'react';
import BpkPanel from 'bpk-component-panel';
import BpkText from 'bpk-component-text';
import { cssModules } from 'bpk-react-utils';

import {
  getEventTimes,
  getMinutesBetweenNowAndStartTime,
} from '../../common/time-functions';

import STYLES from './LaterEvent.scss';

const getClassName = cssModules(STYLES);

type Props = {
  endDate: Date,
  startDate: Date,
  title: string,
};

const LaterEvent = (props: Props) => {
  const { startDate, endDate, title } = props;

  const now = new Date(2019, 6, 6, 10, 57, 0);
  const minutesBetweenNowAndStartTime = getMinutesBetweenNowAndStartTime(
    now,
    startDate,
    endDate,
  );

  const classNames = getClassName(
    'later-event',
    minutesBetweenNowAndStartTime > -5 &&
      minutesBetweenNowAndStartTime < 5 &&
      'later-event--very-soon',
    minutesBetweenNowAndStartTime >= 5 &&
      minutesBetweenNowAndStartTime < 20 &&
      'later-event--soon',
  );

  return (
    <BpkPanel fullWidth className={classNames}>
      <BpkText className={getClassName('later-event__title')} textStyle="base">
        {title}
      </BpkText>
      <BpkText className={getClassName('later-event__time')} textStyle="xs">
        {getEventTimes(startDate, endDate)}
      </BpkText>
    </BpkPanel>
  );
};

export default LaterEvent;
