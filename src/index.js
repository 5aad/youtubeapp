import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Showvideo from './ReactYoutube/showvideo';
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Playlist from './ReactYoutube/playlist';
ReactDOM.render(
  <React.StrictMode>
            <Router >
          <Switch>
          <Route path="/" exact={true} component={Showvideo} />
            <Route path="/playlist" component={Playlist} />
          </Switch>
          </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
