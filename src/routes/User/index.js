import React, { Component } from 'react';
import Firebase from '../../firebase';

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

    const { firstName, lastName } = this.state.user;
    return (
      <div>
        <h2>{firstName} {lastName}</h2>

      </div>
    )
  }

}
