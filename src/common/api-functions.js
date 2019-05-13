import { Client } from '@microsoft/microsoft-graph-client';
import { UserAgentApplication } from 'msal';
import { MSALAuthenticationProvider } from '@microsoft/microsoft-graph-client/lib/src/MSALAuthenticationProvider';

import { clientId } from '../config.json';

const scopes = ['user.read', 'calendars.read'];

const authCallback = (error, response) => {
  if (error) {
    throw new Error(error);
  }
  console.log('Auth callback', response);
};

const getMsalInstance = () => {
  const msalInstance = new UserAgentApplication({
    auth: {
      clientId,
      redirectUri: 'http://localhost:3000',
    },
    cache: {
      cacheLocation: 'localStorage',
      storeAuthStateInCookie: true,
    },
  });
  return msalInstance;
};

const getUserLogin = (msalInstance: UserAgentApplication) =>
  new Promise((resolve, reject) => {
    if (msalInstance.getAccount()) {
      resolve(msalInstance.getAccount());
    } else {
      msalInstance.handleRedirectCallback((error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
      msalInstance.loginRedirect({ scopes });
    }
  });

const getAccessToken = (msalInstance: UserAgentApplication) => {
  console.log('getting token');
  return new Promise((resolve, reject) => {
    msalInstance
      .acquireTokenSilent({ scopes })
      .then(accessTokenResponse => {
        console.log('accessTokenResponse', accessTokenResponse);
        resolve(accessTokenResponse);
      })
      .catch(error => {
        console.error('accesstokenerror', error);
        reject(error);
      });
  });
};

const logInUserWithAccessToken = async () => {
  const msalInstance = getMsalInstance();
  const authData = await getUserLogin(msalInstance);
  console.log(authData);
  const accessTokenData = await getAccessToken(msalInstance);
  // console.log(accessTokenData);
};

export { getUserLogin, getAccessToken, logInUserWithAccessToken };
