import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import * as serviceWorker from './serviceWorker';

import App from './components/App';
import Firebase, { FirebaseContext } from "./components/Firebase"
import SignUp from "./components/SignUp";

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
    <SignUp />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://biyt.ly/CRA-PWA
serviceWorker.register();
