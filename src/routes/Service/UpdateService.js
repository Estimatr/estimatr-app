import React, { Component } from 'react';
import Firebase from '../../firebase';
import { TextField, RaisedButton } from 'material-ui';

export default class extends Component {

  constructor(props) {
    super(props);
    this.state = { itemName: '', description: '', sku: '' };

  }

  componentDidMount() {
    const { id } = this.props.match.params;

    if (id) {
      Firebase.fetch(`services/${id}`, {
        context: this,
        then(service) {
          this.setState(service);
        }
      });
    }
  }

  onServiceSaved = e => {
    e.preventDefault();

    const service = this.state;
    const { history } = this.props;
    const { id } = this.props.match.params;

    if (!id) {
      Firebase.push('services', {
        context: this,
        data: service,
        then(err) {
          if (!err) {
            history.push('/services');
          }
        }
      });
    } else {
      Firebase.post(`services/${id}`, {
        context: this,
        data: service,
        then(err) {
          if (!err) {
            history.push('/services');
            // this.props.history.push('/services');
          }
        }
      })
    }

    // this.setState({
    //   service: { service },
    // })
  };

  render() {
    return (
      <form onSubmit={this.onServiceSaved}>

        <fieldset>
          <TextField floatingLabelText="Item Name" value={this.state.itemName} onChange={e => this.setState({ itemName: e.target.value })} fullWidth={true} required minLength={2} />
        </fieldset>

        <fieldset>
          <TextField type="text" floatingLabelText="Description" value={this.state.description} onChange={e => this.setState({ description: e.target.value })} fullWidth={true} required minLength={2} />
        </fieldset>

        <fieldset>
          <TextField type="text" floatingLabelText="SKU" value={this.state.sku} onChange={e => this.setState({ sku: e.target.value })} fullWidth={true} required />
        </fieldset>

        <div className="actions">
          <RaisedButton label="Cancel" className="button" onTouchTap={e => console.log(this.props.history.goBack())} />
          <RaisedButton type="submit" primary={true} label="Save" className="button" />
        </div>
      </form>

    )
  }
}
