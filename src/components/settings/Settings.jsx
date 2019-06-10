// @flow

import React, { Component } from 'react';
import BpkText from 'bpk-component-text';
import { cssModules } from 'bpk-react-utils';
import BpkButton from 'bpk-component-button';

import {
  getUserAgentApplication,
  getAuthenticatedState,
  getUserProfile,
  logIn,
} from '../../common/auth-functions';

import STYLES from './Settings.scss';

const getClassName = cssModules(STYLES);

class Settings extends Component {
  constructor() {
    super();

    this.userAgentApplication = getUserAgentApplication();
    const isAuthenticated = getAuthenticatedState(this.userAgentApplication);

    if (isAuthenticated) {
      this.getUser();
    }

    this.state = {
      isAuthenticated,
      user: null,
    };
  }

  getUser = async () => {
    const user = await getUserProfile(this.userAgentApplication);
    console.log(user);
    this.setState({
      isAuthenticated: true,
      user,
    });
  };

  loginFlow = async () => {
    await logIn(this.userAgentApplication);
    this.getUser();
  };

  render() {
    const { isAuthenticated, user } = this.state;
    return (
      <main className={getClassName('settings')}>
        <BpkText textStyle="xl" bold className={getClassName('settings__row')}>
          Time Turner
        </BpkText>

        {!isAuthenticated && (
          <section>
            <div className={getClassName('settings__row')}>
              <BpkButton onClick={this.loginFlow}>
                Sign in to Office 365
              </BpkButton>
            </div>
          </section>
        )}

        {isAuthenticated && (
          <section>
            {user && (
              <BpkText>
                Signed in as <strong>{user.displayName}</strong>
              </BpkText>
            )}
            <div className={getClassName('settings__row')}>
              <BpkButton>Sign out of Office 365</BpkButton>
            </div>
          </section>
        )}
      </main>
    );
  }
}

export default Settings;
