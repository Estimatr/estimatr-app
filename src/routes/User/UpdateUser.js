import React, { Component } from 'react';
import Firebase from '../../firebase';
import './User.css';

export default class extends Component {

  constructor(props) {
    super(props);
    this.state = { firstName: '', lastName: '', email: '', isActive: true, hireDate: new Date() };
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    Firebase.fetch(`users/${id}`, { context: this })
      .then(user => {
        this.setState(user);
      });
  }

  onUserSaved = e => {
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.onUserSaved}>
        <fieldset>
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" className="u-full-width" value={this.state.firstName} onChange={e => this.setState({ firstName: e.target.value })} required />
        </fieldset>

        <fieldset>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" className="u-full-width" value={this.state.lastName} onChange={e => this.setState({ lastName: e.target.value })} required />
        </fieldset>

        <fieldset>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" className="u-full-width" value={this.state.email} onChange={e => this.setState({ email: e.target.value })} required />
        </fieldset>

        <fieldset>
          <label htmlFor="hireDate">Hire Date</label>
          <input type="date" id="hireDate" className="u-full-width" value={this.state.hireDate} onChange={e => this.setState({ hireDate: e.target.value })} required />
        </fieldset>

        <fieldset>
          <label htmlFor="isActive">
            <input type="checkbox" defaultChecked={this.state.isActive} id="isActive" onChange={e => this.setState({ email: e.target.value })} /> Active?
          </label>
        </fieldset>

        <div className="formActions">
          <button type="submit">Save</button>
        </div>
      </form>
    )
  }
}
