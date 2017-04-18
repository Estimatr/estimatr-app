import React, { Component } from 'react';
import Firebase from '../../firebase';

import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import { RaisedButton } from 'material-ui';

export default class extends Component {

  constructor(props) {
    super(props);
    this.state = { users: [], selected: [] };
  }

  componentDidMount() {
    this.ref = Firebase.syncState('users', {
      context: this,
      state: 'users',
      asArray: true,
      queries: {
        orderByChild: 'lastName'
      }
    });
  }

  componentWillUnmount() {
    Firebase.removeBinding(this.ref);
  }

  render() {
    return (
      <div>
        <div>
          {
            this.state.selected.length > 0 ?
              <div>
                <RaisedButton label="Edit" secondary={true} onTouchTap={e => console.log(this.state.users[this.state.selected[0]])} />
                <RaisedButton label="Delete" secondary={true} onTouchTap={e => console.log(this.state.users[this.state.selected[0]])} />
              </div> :
              <RaisedButton label="New" primary={true} onTouchTap={e => console.log('Tapped')} />
          }
        </div>

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
