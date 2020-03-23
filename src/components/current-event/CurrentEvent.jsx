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
  endDate: Date,
  startDate: Date,
  title: string,
  location: ?string,
  meetingLink: ?string,
};

const CurrentEvent = (props: Props) => {
  const { startDate, endDate, title, location, meetingLink } = props;

  const now = new Date();
  const minutesBetweenNowAndStartTime = getMinutesBetweenNowAndStartTime(
    now,
    startDate,
    endDate,
  );

  const meetingStartingVerySoon =
    minutesBetweenNowAndStartTime > -5 && minutesBetweenNowAndStartTime < 5;

  const classNames = getClassName(
    'current-event',
    meetingStartingVerySoon && 'current-event--very-soon',
    minutesBetweenNowAndStartTime >= 5 &&
      minutesBetweenNowAndStartTime < 20 &&
      'current-event--soon',
  );

  return (
    <BpkPanel fullWidth className={classNames}>
      <section className={getClassName('current-event__main')}>
        <section>
          <BpkText textStyle="base" bold>
            {title}
          </BpkText>
        </section>
        {location && <BpkText textStyle="xs">{location}</BpkText>}
      </section>
      <section className={getClassName('current-event__time-and-button')}>
        {meetingStartingVerySoon && meetingLink && (
          <BpkButton
            outline
            iconOnly
            href={meetingLink}
            blank
            title={meetingLink}
            className={getClassName('current-event__button')}
          >
            <AlignedPhoneCallIcon />
          </BpkButton>
        )}
        <BpkText textStyle="xs"> {getEventTimes(startDate, endDate)}</BpkText>
      </section>
    </BpkPanel>
  );
};

export default CurrentEvent;
