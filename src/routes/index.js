import React from 'react';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';

import Home from './Home';
import NotFound from './NotFound';
import Users from './Users';
import Services from './Services';
import Service from './Service';
import User from './User';
import UpdateUser from './User/UpdateUser';
import UpdateService from './Service/UpdateService';

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />

      <Route exact path="/users" component={Users} />
      <Route exact path="/users/new" component={UpdateUser} />
      <Route path="/users/edit/:id" component={UpdateUser} />
      <Route path="/users/:id" component={User} />

      <Route exact path="/services" component={Services} />
      <Route exact path="/services/new" component={UpdateService} />
      <Route path="/services/edit/:id" component={UpdateService} />
      <Route path="/services/:id" component={Service} />

      <Route component={NotFound} />
    </Switch>
  </Router>
)


