// @flow

import React from 'react';
import BpkText from 'bpk-component-text';
import { cssModules } from 'bpk-react-utils';
import BpkButton from 'bpk-component-button';

import { logInUserWithAccessToken } from '../../common/api-functions';

import STYLES from './Settings.scss';

const getClassName = cssModules(STYLES);

const Settings = () => {
  const authenticated = false;
  return (
    <main className={getClassName('settings')}>
      <BpkText textStyle="xl" bold className={getClassName('settings__row')}>
        Time Turner
      </BpkText>

      {!authenticated && (
        <section>
          <div className={getClassName('settings__row')}>
            <BpkButton onClick={logInUserWithAccessToken}>
              Sign in to Office 365
            </BpkButton>
          </div>
        </section>
      )}

      {authenticated && (
        <section>
          <div className={getClassName('settings__row')}>
            <BpkButton>Sign out of Office 365</BpkButton>
          </div>
        </section>
      )}
    </main>
  );
};

export default Settings;
