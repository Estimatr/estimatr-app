import React from 'react';
import glamorous from 'glamorous';
const { Div } = glamorous;
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from '../routes';

export default () => (
  <Div>
    <header>
      123
    </header>
    <article>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </article>
    <footer>
      123 Footer
    </footer>
  </Div>
);
