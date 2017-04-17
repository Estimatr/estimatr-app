import React from 'react';
import { css } from 'glamor';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Styles from '../styles';

import { Home, NotFound, Users, Services, Service, User } from '../routes';

const appStyles = css({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh'
});

const headerStyles = css({
  padding: '15px',
  background: Styles.primary.normal,
  display: 'flex'
});

const a = css({
  flexGrow: 1
});

const articleStyles = css({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 2,
  padding: '15px'
});

const footerStyles = css({
  padding: '15px',
  background: Styles.primary.dark,
  color: '#fff'
});

export default () => (
  <section {...appStyles}>
    <header {...headerStyles}>
      <div {...css({ flexGrow: 5 })}><a href="/" {...css({ fontSize: '18px', textDecoration: 'none' })}>Estimatr</a>
      </div>
      <nav {...css({ display: 'flex', flexDirection: 'row' })}>
        <a href="/users">Users</a>
        <a href="/services">Services</a>
      </nav>
    </header>
    <article {...articleStyles}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users" component={Users} />
          <Route path="/users/:id" component={User} />
          <Route exact path="/services" component={Services} />
          <Route path="/services/:id" component={Service} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </article>
    <footer {...footerStyles}>
      123 Footer
    </footer>
  </section>
);
