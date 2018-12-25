import React from 'react';
import Home from './features/home'
import Story from './features/story'
import { Route, BrowserRouter, Switch } from 'react-router-dom';

const Routes = () => (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path = "/story" component={Story} />
      </Switch>
    </BrowserRouter>
)

export default Routes;
