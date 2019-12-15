import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import SalesBilling from './sales.billing';
import Inventory from './inventory';
import Expenses from './expenses';
import Reports from './report';

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/sales" component={SalesBilling} />
    <Route path="/inventory" component={Inventory} />
    <Route path="/expenses" component={Expenses} />
    <Route path="/report" component={Reports} />
  </Switch>
)

export default Main;