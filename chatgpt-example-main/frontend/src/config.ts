// import { CLIENT_URL } from "../src/constants/URL";
// const CLIENT_URL = 'http://localhost:3000/'
export const config = {
    auth: {
    // appId: 'd6351777-0f1d-4e24-af15-bd1aa854724c',
     // tenantId: "53463a4f-0c1d-46bc-890e-d6eeef785730",
    clientId: 'd6351777-0f1d-4e24-af15-bd1aa854724c',
    authority:'https://login.microsoftonline.com/53463a4f-0c1d-46bc-890e-d6eeef785730',
    redirectUri: 'http://localhost:3001',
    },
    cache: {
        cacheLocation: "sessionStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
      },
    }
      export const loginRequest = {
      //   scopes: ["User.Read"]
      scope:["User.Read"]
        
       };
       // Add the endpoints here for Microsoft Graph API services you'd like to use.
export const graphConfig = {
  graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
};
   


// export default config;
