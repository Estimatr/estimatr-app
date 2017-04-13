import React from 'react';
import { css } from 'glamor';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home, NotFound } from '../routes';

const appStyles = css({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh'
});

const headerStyles = css({
  padding: '15px',
  background: '#cdcdcd'
});

const articleStyles = css({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 2,
  padding: '15px'
});

const footerStyles = css({
  padding: '15px',
  background: '#595959'
});

export default () => (
  <section {...appStyles}>
    <header {...headerStyles}>
      <nav>
        <a href="/">Home</a>
      </nav>
    </header>
    <article {...articleStyles}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </article>
    <footer {...footerStyles}>
      123 Footer
    </footer>
  </section>
);
