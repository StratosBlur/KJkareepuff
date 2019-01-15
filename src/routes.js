import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './features/home'
import Story from './features/story'
import Register from './features/register';
import Order from './features/order';
import Payment from './features/payment'
import Partner from './features/partner'
import ConfirmPayment from './features/ConfirmPayment';
const Routes = () => (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path = "/เรื่องราว" component={Story} />
        <Route path = "/สินค้า" component={Order} />
        <Route path = "/ลงทะเบียน" component={Register} />
        <Route path = "/ชำระเงิน" component={Payment} />
        <Route path = "/ร่วมธุรกิจกับเรา" component={Partner}/>
        <Route path = "/ยืนยันการชำระ" component={ConfirmPayment}/>
      </Switch>
    </BrowserRouter>
)

export default Routes;
