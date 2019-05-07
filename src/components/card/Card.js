import React from 'react';
import PropTypes from 'prop-types';
import BpkPanel from 'bpk-component-panel';
import BpkText from 'bpk-component-text';

import STYLES from './Card.scss';

const c = className => STYLES[className] || 'UNKNOWN';

const Card = (props) => {
  const { startTime, endTime, title, description } = props;
  return (
    <BpkPanel>
      <section>
        <BpkText textStyle="lg">{title}</BpkText>
      </section>
    </BpkPanel>
  );
};

Card.propTypes = {
  startTime: PropTypes.instanceOf(Date).isRequired,
  endTime: PropTypes.instanceOf(Date).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
