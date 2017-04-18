import React, { Component } from 'react';
import Firebase from '../../firebase';

import './User.css';

export default class extends Component {

  constructor(props) {
    super(props);
    this.state = { user: {} };
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    this.ref = Firebase.syncState(`users/${id}`, {
      context: this,
      state: 'user'
    });
  }

  componentWillUnmount() {
    Firebase.removeBinding(this.ref);
  }

  render() {
    const { firstName, lastName, email, hireDate } = this.state.user;

    return (
      <div className="user-details">
        <h2>
          {firstName} {lastName}
        </h2>

        <dl>
          <div>
            <dt>Email</dt>
            <dd>{email}</dd>
          </div>

          <div>
            <dt>Hire Date</dt>
            <dd>{hireDate}</dd>
          </div>

          <div>
            <dt>Hire Date</dt>
            <dd>{hireDate}</dd>
          </div>
        </dl>

      </div>
    )
  }
}
