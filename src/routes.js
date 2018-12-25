import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './features/home'
import Story from './features/story'
import Register from './features/register';
import Payment from './features/payment';
import Partner from './features/partner';
import ConfirmPayment from './features/ConfirmPayment';
const Routes = () => (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path = "/story" component={Story} />
        <Route path = "/register" component={Register} />
        <Route path = "/payment" component={Payment} />
        <Route path = "/partner" component={Partner}/>
        <Route path = "/confirmpayment" component={ConfirmPayment}/>
      </Switch>
    </BrowserRouter>
)

export default Routes;
