// @flow

import React from 'react';
import BpkText from 'bpk-component-text';
import { cssModules } from 'bpk-react-utils';

import STYLES from './Settings.scss';

const getClassName = cssModules(STYLES);

const Settings = () => (
  <main className={getClassName('settings')}>
    <BpkText
      textStyle="xl"
      bold
      tagName="h1"
      className={getClassName('settings__title')}
    >
      Time Turner
    </BpkText>
  </main>
);

export default Settings;
