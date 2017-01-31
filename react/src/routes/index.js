import React from 'react';
import { Route } from 'react-router';
import App from '../components/App';
import MainContainer from '../containers/MainContainer';

let routes = (
  <Route path="/" component={App}>
    <Route path="/play" component={MainContainer} />
  </Route>
);

export default routes;
