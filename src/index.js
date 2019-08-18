import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from "firebase"

let gapi = window.gapi

firebase.initializeApp({
  apiKey: "AIzaSyCKY4jyeVG42EIKO_rUtt92HTvgGA6gTyg",
  authDomain: "quickstart-1565933663522.web.app"
})
gapi.load('client:auth2', () => {
  console.log(gapi)
  gapi.client.init({
    apiKey: 'AIzaSyBOAlQDyCFJra5LDxVflNSQPDX_cIuOc7k',
    clientId: '602273574158-v2c8nla22vif44l6r5shhr45uuhrpdd3.apps.googleusercontent.com',
    discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"],
    scope: 'https://www.googleapis.com/auth/gmail.readonly'
  })
})
gapi.load('client:auth2', () => ReactDOM.render(<App firebase={firebase} />, document.getElementById('root')))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();