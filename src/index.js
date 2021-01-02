import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';
import Amplify from 'aws-amplify'
import awsmobile from './aws-exports';

import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

var urlsIn = awsmobile.oauth.redirectSignIn.split(",");
var urlsOut = awsmobile.oauth.redirectSignOut.split(",");
const oauth = {
  domain: awsmobile.oauth.domain,
  scope: awsmobile.oauth.scope,
  redirectSignIn: awsmobile.oauth.redirectSignIn,
  redirectSignOut: awsmobile.oauth.redirectSignOut,
  responseType: awsmobile.oauth.responseType
};
var hasLocalhost  = (hostname) => Boolean(hostname.match(/localhost/) || hostname.match(/127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}/));
var hasHostname   = (hostname) => Boolean(hostname.includes(window.location.hostname));
var isLocalhost   = hasLocalhost(window.location.hostname);

if (isLocalhost) {
  urlsIn.forEach((e) =>   { if (hasLocalhost(e)) { 
    console.log(e);
    oauth.redirectSignIn = e; }});
  urlsOut.forEach((e) =>  { if (hasLocalhost(e)) { 
    console.log(e);
    oauth.redirectSignOut = e; }});
}
else {
  urlsIn.forEach((e) =>   { if (hasHostname(e)) { 
    console.log(e);
    oauth.redirectSignIn = e; }});
  urlsOut.forEach((e) =>  { if (hasHostname(e)) { 
    console.log(e);
    oauth.redirectSignOut = e; }});
}
var configUpdate = awsmobile;
configUpdate.oauth = oauth;
Amplify.configure(configUpdate);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();