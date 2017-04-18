import React, { Component } from 'react';
import { AppBar, Drawer, MenuItem } from 'material-ui';
import Routes from '../routes';

export default class extends Component {

  constructor() {
    super();
    this.state = { open: false };
  }

  render() {
    return (
      <section>
        <AppBar title="Estimatr" titleStyle={{ cursor: 'pointer' }} onLeftIconButtonTouchTap={e => this.setState({ open: !this.state.open })} onTitleTouchTap={() => window.location.href = '/'} />
        <Drawer {...this.state} docked={false} onRequestChange={(open) => this.setState({ open })} className="left-navigation">
          <MenuItem><a href="/services">Services</a></MenuItem>
          <MenuItem><a href="/users">Users</a></MenuItem>
        </Drawer>
        <article >
          <Routes />
        </article>
      </section>
    )
  }
}
