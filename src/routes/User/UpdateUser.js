import React, { Component } from 'react';
import Firebase from '../../firebase';
import { TextField, DatePicker, Toggle, RaisedButton } from 'material-ui';
import './User.css';

export default class extends Component {

  constructor(props) {
    super(props);
    this.state = { firstName: '', lastName: '', email: '', isActive: true, hireDate: {} };
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
          <TextField floatingLabelText="First Name" value={this.state.firstName} onChange={e => this.setState({ firstName: e.target.value })} fullWidth={true} required minLength={2} />
        </fieldset>

        <fieldset>
          <TextField type="text" floatingLabelText="Last Name" value={this.state.lastName} onChange={e => this.setState({ lastName: e.target.value })} fullWidth={true} required minLength={2} />
        </fieldset>

        <fieldset>
          <TextField type="email" floatingLabelText="Email Address" value={this.state.email} onChange={e => this.setState({ email: e.target.value })} fullWidth={true} required />
        </fieldset>

        <fieldset>
          <DatePicker hintText="Hire Date" value={this.state.hireDate} onChange={(e, hireDate) => this.setState({ hireDate })} container="inline" mode="landscape" required autoOk={false} fullWidth={true} />
        </fieldset>

        <fieldset>
          <Toggle label="Active" labelPosition="right" defaultToggled={this.state.isActive} onToggle={(e, isActive) => this.setState({ isActive })} />
        </fieldset>

        <div className="actions">
          <RaisedButton label="Cancel" className="button" onTouchTap={e => console.log(this.props.history.goBack())} />
          <RaisedButton type="submit" primary={true} label="Save" className="button" />
        </div>
      </form>
    )
  }
}
