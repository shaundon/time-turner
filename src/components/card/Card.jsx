// @flow

import React from 'react';
import BpkPanel from 'bpk-component-panel';
import BpkText from 'bpk-component-text';

import { describeEventTimeInWords } from './time-functions';
import STYLES from './Card.scss';

const c = className => STYLES[className] || 'UNKNOWN';

type Props = {
  description: string,
  endDate: Date,
  startDate: Date,
  title: string,
};

const Card = (props: Props) => {
  const { startDate, endDate, title, description } = props;
  const formattedDateString = describeEventTimeInWords(
    new Date(),
    startDate,
    endDate,
  );
  return (
    <BpkPanel>
      <section>
        <BpkText textStyle="lg">{title}</BpkText>
      </section>
      <section>
        <BpkText textStyle="base">{description}</BpkText>
      </section>
      <BpkText textStyle="sm">{formattedDateString}</BpkText>
    </BpkPanel>
  );
};

export default Card;
