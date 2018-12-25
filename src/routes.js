import React from 'react';
import Home from './features/home'
import { Route, BrowserRouter } from 'react-router-dom';

const Routes = () => (
  <BrowserRouter>
    <Route path="/" component={Home} />
  </BrowserRouter>
);

export default Routes;
