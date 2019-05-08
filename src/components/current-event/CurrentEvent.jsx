// @flow

import React from 'react';
import BpkButton from 'bpk-component-button';
import BpkPanel from 'bpk-component-panel';
import BpkText from 'bpk-component-text';
import { cssModules } from 'bpk-react-utils';
import { withButtonAlignment, withRtlSupport } from 'bpk-component-icon';
import PhoneCallcon from 'bpk-component-icon/sm/phone-call';

import {
  getEventTimes,
  getMinutesBetweenNowAndStartTime,
} from '../../common/time-functions';

import STYLES from './CurrentEvent.scss';

const AlignedPhoneCallIcon = withButtonAlignment(withRtlSupport(PhoneCallcon));

const getClassName = cssModules(STYLES);

type Props = {
  description: string,
  endDate: Date,
  startDate: Date,
  title: string,
};

const CurrentEvent = (props: Props) => {
  const { startDate, endDate, title, description } = props;

  const now = new Date(2019, 6, 6, 10, 57, 0);
  const minutesBetweenNowAndStartTime = getMinutesBetweenNowAndStartTime(
    now,
    startDate,
    endDate,
  );

  const classNames = getClassName(
    'current-event',
    minutesBetweenNowAndStartTime > -5 &&
      minutesBetweenNowAndStartTime < 5 &&
      'current-event--very-soon',
    minutesBetweenNowAndStartTime >= 5 &&
      minutesBetweenNowAndStartTime < 20 &&
      'current-event--soon',
  );

  // TODO use real link.
  const meetingLink = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';

  return (
    <BpkPanel fullWidth className={classNames}>
      <section className={getClassName('current-event__main')}>
        <section>
          <BpkText textStyle="base">{title}</BpkText>
        </section>
        <BpkText textStyle="xs"> {getEventTimes(startDate, endDate)}</BpkText>
      </section>
      {meetingLink && (
        <section className={getClassName('current-event__button')}>
          <BpkButton
            secondary
            iconOnly
            href={meetingLink}
            blank
            title={meetingLink}
          >
            <AlignedPhoneCallIcon />
          </BpkButton>
        </section>
      )}
    </BpkPanel>
  );
};

export default CurrentEvent;
