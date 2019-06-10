// @flow

import { UserAgentApplication } from 'msal';

import { clientId, scopes } from '../config.json';

import { getUserDetails } from './api-functions';

const getUserAgentApplication = () =>
  new UserAgentApplication({
    auth: { clientId },
    cache: {
      cacheLocation: 'localStorage',
      storeAuthStateInCookie: true,
    },
  });

const getAuthenticatedState = (userAgentApplication: UserAgentApplication) => {
  const user = userAgentApplication.getAccount();
  return user !== null;
};

const getAccessToken = async (userAgentApplication: UserAgentApplication) => {
  try {
    return userAgentApplication.acquireTokenSilent({
      scopes,
    });
  } catch (err) {
    throw new Error(err);
  }
};

const getUserProfile = async (userAgentApplication: UserAgentApplication) => {
  const accessToken = await getAccessToken(userAgentApplication);
  if (accessToken) {
    return getUserDetails(accessToken);
  }
  throw new Error('No access token!');
};

const logIn = async (userAgentApplication: UserAgentApplication) =>
  userAgentApplication.loginPopup({
    scopes,
    prompt: 'select_account',
  });

export {
  getAccessToken,
  getUserAgentApplication,
  getAuthenticatedState,
  getUserProfile,
  logIn,
};
