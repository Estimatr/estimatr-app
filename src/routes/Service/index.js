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
    const { itemName, description, category, price, cost, margin, profit, sku, notes } = this.state.service;
    return (
      <div className="service-detail">
        <h1>{itemName}</h1>

        <dl>
          <div>
            <dt>Description</dt>
            <dd>{description}</dd>
          </div>

          <div>
            <dt>Sku</dt>
            <dd>{sku}</dd>
          </div>

          <div>
            <dt>Category</dt>
            <dd>{category}</dd>
          </div>

          <div>
            <dt>Price</dt>
            <dd>${price}</dd>
          </div>

          <div>
            <dt>Cost</dt>
            <dd>${cost}</dd>
          </div>

          <div>
            <dt>Profit</dt>
            <dd>${profit}</dd>
          </div>

          <div>
            <dt>Margin</dt>
            <dd>${margin}</dd>
          </div>

          <div>
            <dt>Notes</dt>
            <dd>{notes}</dd>
          </div>
        </dl>

      </div>
    )
  }
}
