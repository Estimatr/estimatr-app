import React, { Component } from 'react';
import Firebase from '../../firebase';

export default class extends Component {

  constructor(props) {
    super(props);
    this.state = { service: {} };
  }

  componentDidMount() {
    this.ref = Firebase.push(`services`, {
      context: this,
      state: 'service',
    });
  }

  componentWillUnmount() {
    Firebase.removeBinding(this.ref);
  }

  render() {
    const {  } = this.state.service;
    return (
      <div className="service-new">
        <h1>New Service</h1>

      </div>
    )
  }
}