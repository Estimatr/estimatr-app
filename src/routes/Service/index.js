import React, { Component } from 'react';
import Firebase from '../../firebase';

export default class extends Component {

  constructor(props) {
    super(props);
    this.state = { service: {} };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.ref = Firebase.syncState(`services/${id}`, {
      context: this,
      state: 'service',
    });
  }

  componentWillUnmount() {
    Firebase.removeBinding(this.ref);
  }

  render() {
    return (
      <div>
        <h1>{this.state.service.item}</h1>
      </div>
    )
  }
}