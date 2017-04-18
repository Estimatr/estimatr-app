import React, { Component } from 'react';
import Firebase from '../../firebase';

export default class extends Component {

  constructor(props) {
    super(props);
    this.state = { users: [] };
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
        <h2>Users</h2>

        <table className="u-full-width">
          <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          {this.state.users.map(u => (
            <tr key={u.key}>
              <td><a href={`/users/${u.key}`}>{u.firstName} {u.lastName}</a></td>
              <td>{u.email}</td>
              <td>Edit | Delete</td>
            </tr>
          ))}
          </tbody>
        </table>

      </div>
    )
  }

}
