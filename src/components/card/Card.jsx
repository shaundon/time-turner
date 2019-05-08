// @flow

import React from 'react';
import BpkButton from 'bpk-component-button';
import BpkPanel from 'bpk-component-panel';
import BpkText from 'bpk-component-text';
import BpkTooltip from 'bpk-component-tooltip';
import { cssModules } from 'bpk-react-utils';
import { withButtonAlignment, withRtlSupport } from 'bpk-component-icon';
import PhoneCallcon from 'bpk-component-icon/sm/phone-call';

import {
  getMinutesBetweenNowAndStartTime,
  describeEventTimeInWords,
} from './time-functions';
import STYLES from './Card.scss';

const AlignedPhoneCallIcon = withButtonAlignment(withRtlSupport(PhoneCallcon));

const getClassName = cssModules(STYLES);

type Props = {
  description: string,
  endDate: Date,
  startDate: Date,
  title: string,
};

const Card = (props: Props) => {
  const { startDate, endDate, title, description } = props;

  const now = new Date(2019, 6, 6, 10, 58, 0);
  const formattedTimeString = describeEventTimeInWords(now, startDate, endDate);

  const minutesBetweenNowAndStartTime = getMinutesBetweenNowAndStartTime(
    now,
    startDate,
    endDate,
  );

  const classNames = getClassName(
    'card',
    minutesBetweenNowAndStartTime < 5 && 'card--very-soon',
    minutesBetweenNowAndStartTime >= 5 &&
      minutesBetweenNowAndStartTime < 20 &&
      'card--soon',
    minutesBetweenNowAndStartTime >= 20 && 'card--later',
  );

  const hasMeeting = true;

  return (
    <BpkPanel className={classNames}>
      <section className={getClassName('card__main')}>
        <section>
          <BpkText textStyle="lg">{title}</BpkText>
        </section>
        <BpkText textStyle="sm">{formattedTimeString}</BpkText>
      </section>
      {hasMeeting && (
        <section className={getClassName('card__button')}>
          <BpkTooltip
            placement="left"
            id="join-call"
            target={
              <BpkButton secondary iconOnly>
                <AlignedPhoneCallIcon />
              </BpkButton>
            }
          >
            Join Zoom call
          </BpkTooltip>
        </section>
      )}
    </BpkPanel>
  );
};

export default Card;
