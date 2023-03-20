import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import store from "./store";
// sharepoint connection
import { MsalProvider } from "@azure/msal-react";
import { config  } from "./config.ts";
import {   PublicClientApplication } from "@azure/msal-browser";
const pca = new PublicClientApplication( config );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MsalProvider instance={pca}>
    <Provider store={store}>
      <App />
    </Provider>
    </MsalProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
