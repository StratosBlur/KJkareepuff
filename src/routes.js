import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './features/home'
import Story from './features/story'
import Register from './features/register';
import Payment from './features/payment';
import Partner from './features/'
const Routes = () => (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path = "/story" component={Story} />
        <Route path = "/register" component={Register} />
        <Route path = "/payment" component={Payment} />
      </Switch>
    </BrowserRouter>
)

export default Routes;
