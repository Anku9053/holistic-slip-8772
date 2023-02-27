// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import { Auth0Provider } from "@auth0/auth0-react";
// import { BrowserRouter } from 'react-router-dom';

// ReactDOM.render(
//   <Auth0Provider
//     domain="dev-qgpccamhzqqy6sn5.us.auth0.com"
//     clientId="Loctw6fRfFf3UACFgwZJQ60SyeZ3ZBgp"
//     authorizationParams={{
//       redirect_uri: window.location.origin
//     }}
//   >
   
//   </Auth0Provider>,
//   document.getElementById("root")
// );


// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import { Auth0Provider } from "@auth0/auth0-react";
// import { BrowserRouter } from 'react-router-dom';


// ReactDOM.render(
//   <Auth0Provider
//     domain="dev-qgpccamhzqqy6sn5.us.auth0.com"
//     clientId="Loctw6fRfFf3UACFgwZJQ60SyeZ3ZBgp"
//     authorizationParams={{
//       redirect_uri: window.location.origin
//     }}
//   >
//      <BrowserRouter>
//     <App />
//     </BrowserRouter>
  
//   </Auth0Provider>,
//   document.getElementById("root")
// );

import { BrowserRouter } from 'react-router-dom';
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-qgpccamhzqqy6sn5.us.auth0.com"
    clientId="Loctw6fRfFf3UACFgwZJQ60SyeZ3ZBgp"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Auth0Provider>,
  document.getElementById("root")
);