import React, { Component } from 'react';
import Base from '../../firebase';

import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import { RaisedButton, Dialog, FlatButton, Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle, TextField } from 'material-ui';

import './index.css';

export default class extends Component {

  constructor(props) {
    super(props);
    this.state = { users: [], selected: [], deleteOpen: false, search: '' };
  }

  componentDidMount() {
    this.ref = Base.syncState('users', {
      context: this,
      state: 'users',
      asArray: true,
      queries: {
        orderByChild: 'lastName'
      }
    });
  }

  componentWillUnmount() {
    Base.removeBinding(this.ref);
  }

  navigateToEdit = () => {
    const index = this.state.selected.reduce((prev, current) => current);
    const { key } = this.state.users[index];
    const { history } = this.props;

    history.push(`/users/edit/${key}`);
  };

  navigateToNew = () => this.props.history.push('/users/new');

  renderDialog = user => {

    return user &&
      (
        <div>
          Delete <strong>{user.firstName} {user.lastName}</strong>?
        </div>
      )
  };

  handleFilterChanged = e => {
    const search = e.target.value;
    Base.fetch('users', {
      context: this, asArray: true,
      then(users) {
        this.setState({ users: users.filter(u => u.firstName.indexOf(search) > -1 || u.lastName.indexOf(search) > -1 || u.email.indexOf(search) > -1), search })
      }
    });


    // this.state.users
    // )
    // ;
    // this.setState({ search, users });

  };

  render() {

    const actions = [
      <FlatButton
        label="Cancel"
        secondary={true}
        onTouchTap={e => this.setState({ deleteOpen: false })}
      />,
      <FlatButton
        label="OK"
        primary={true}
        onTouchTap={e => this.setState({ deleteOpen: false })}
      />,
    ];

    return (
      <div className="Users">
        <Toolbar>

          <ToolbarTitle text="Users" />

          <ToolbarGroup lastChild={true}>
            <TextField hintText="Filter" value={this.state.search} onChange={this.handleFilterChanged} type="search" />
            <ToolbarSeparator />

            {
              this.state.selected.length > 0 ?
                (
                  <div className="secondary-actions">
                    <RaisedButton label="Edit" secondary={true} onTouchTap={this.navigateToEdit} className="button" />
                    <RaisedButton label="Delete" secondary={true} onTouchTap={e => this.setState({ deleteOpen: !this.state.deleteOpen })} className="button" />
                  </div>) :
                (
                  <RaisedButton label="New" primary={true} onTouchTap={this.navigateToNew} />
                )
            }
          </ToolbarGroup>
        </Toolbar>
        <div>

        </div>

        <Dialog open={this.state.deleteOpen} title="Are you sure?" modal={true} actions={actions}>
          { this.renderDialog(this.state.users[this.state.selected.reduce((prev, current) => current, -1)])}
        </Dialog>

        <Table fixedHeader={true} onRowSelection={e => this.setState({ selected: e })}>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>First Name</TableHeaderColumn>
              <TableHeaderColumn>Last Name</TableHeaderColumn>
              <TableHeaderColumn>Email</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody deselectOnClickaway={false}>
            {this.state.users.map(u => (
              <TableRow key={u.key}>
                <TableRowColumn>{u.firstName}</TableRowColumn>
                <TableRowColumn>{u.lastName}</TableRowColumn>
                <TableRowColumn>{u.email}</TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    )
  }

}
