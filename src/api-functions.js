import { Client } from "@microsoft/microsoft-graph-client";
import { UserAgentApplication } from 'msal';
import { MSALAuthenticationProvider } from "@microsoft/microsoft-graph-client/lib/src/MSALAuthenticationProvider";
import { clientId } from './config.json';

const callback = (errorDesc, token, error, tokenType) => {};
const config = {
    auth: {
      clientId,
    },
    redirectUri: "https://skyscanner.net", // todo
};
const graphScopes = ["user.read", "calendars.read"];

const doStuff = async () => {

// Initialize the MSAL @see https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/MSAL-basics#initialization-of-msal
const userAgentApplication = new UserAgentApplication(config);
const authProvider = new MSALAuthenticationProvider(userAgentApplication, graphScopes);


const options = {
    authProvider, // An instance created from previous step
};
const client = Client.initWithMiddleware(options);

try {
  let userDetails = await client.api("/me").get();
  console.log(userDetails);
} catch (error) {
  throw error;
}

};

export default doStuff;
