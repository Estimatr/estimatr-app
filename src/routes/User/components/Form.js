import React, { Component } from 'react';

export default class extends Component {

  constructor(props) {
    super(props);
    const user = props.user;
    console.log(user);
    this.state = Object.assign({}, user);
  }

  render() {

    const { firstName } = this.props.user;
    return (
      <form onSubmit={this.props.handleUserSave}>
        <fieldset>
          <label htmlFor="firstName">First Name</label>
          <input type="text" defaultValue={firstName} id="firstName" onChange={e => this.setState({ firstName: e.target.value })} />
        </fieldset>
      </form>
    )
  }
}
