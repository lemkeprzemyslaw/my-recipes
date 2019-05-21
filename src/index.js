import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import PasswordForget from "./components/PasswordForget/PasswordForget";

ReactDOM.render(
  <div>
    <App />
    <PasswordForget />
  </div>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://biyt.ly/CRA-PWA
serviceWorker.register();
