import React, { Component } from 'react';
import Firebase from '../../firebase';

export default class extends Component {

  constructor(props) {
    super(props);
    this.state = { services: [] };
  }

  componentDidMount() {
    this.ref = Firebase.syncState(`services`, {
      context: this,
      state: 'services',
      asArray: true
    });
  }

  componentWillUnmount() {
    Firebase.removeBinding(this.ref);
  }

  render() {
    return (
      <div>
        <h1>Services</h1>

        <table className="u-full-width">
          <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
          </tr>
          </thead>
          <tbody>
          {
            this.state.services.map(service => (
              <tr key={service.key}>
                <td><a href={`/services/edit/${service.key}`}>{service.itemName}</a></td>
                <td>{service.sku}</td>
                <td>{service.description}</td>
              </tr>
            ))
          }
          </tbody>
        </table>

      </div>
    )
  }

}
