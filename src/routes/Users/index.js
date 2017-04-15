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
      asArray: true
    });
  }

  componentWillUnmount() {
    Firebase.removeBinding(this.ref);
  }

  render() {
    return (
      <div>
        <h2>Users</h2>

        {this.state.users.map(u => (
          <div key={u.key}>{u.firstName}</div>
        ))}
      </div>
    )
  }

}
