import React from 'react';
import Home from './features/home';
import Story from './features/story';
import Order from './features/order';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

const Routes = () => (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path = "/story" component={Story} />
        <Route path = "/order" component={Order} />
      </Switch>
    </BrowserRouter>
)

export default Routes;
