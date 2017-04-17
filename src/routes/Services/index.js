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
              <tr>
                <td><a href={`/services/${service.key}`}>{service.item}</a></td>
                <td>{service.price}</td>
                <td>{service.category}</td>
              </tr>
            ))
          }
          </tbody>
        </table>

      </div>
    )
  }

}
