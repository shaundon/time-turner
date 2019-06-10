// @flow

import React, { Component } from 'react';
import BpkText from 'bpk-component-text';
import { BpkExtraLargeSpinner } from 'bpk-component-spinner';
import { Redirect } from 'react-router-dom';
import queryString from 'query-string';

import { getTokenFromCode } from '../../common/auth';

class Auth extends Component {
  constructor() {
    super();
    this.state = {
      token: null,
      errorMessage: null,
    };
  }

  async componentDidMount() {
    const urlParams = queryString.parse(window.location.search);
    const authCode = urlParams.code;
    if (authCode) {
      // try {
      const token = await getTokenFromCode(authCode);
      this.setState({ token });
      // } catch (error) {
      //   console.error(error);
      //   this.setState({ errorMessage: error.message });
      // }
    } else {
      this.setState({ token: 'not authorised' });
    }
  }

  render() {
    if (this.state.token) {
      return <Redirect to="/" />;
    }
    if (this.state.errorMessage) {
      return <BpkText>{this.state.errorMessage}</BpkText>;
    }
    return <BpkExtraLargeSpinner />;
  }
}

export default Auth;
