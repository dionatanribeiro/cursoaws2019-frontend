import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Listing from './Listing';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/listing" component={Listing} />
    </Switch>
  </BrowserRouter>
  , document.getElementById('root')
);
