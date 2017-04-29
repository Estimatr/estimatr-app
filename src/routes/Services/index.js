import React, { Component } from 'react';
import Firebase from '../../firebase';
import { RaisedButton, Dialog, FlatButton, Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

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

  navigateToNew = () => this.props.history.push('/services/new');

  renderDialog = service => {

    return service &&
      (
        <div>
          <p>Are you sure you want to delete?</p>
          <p style={{ fontWeight: 'bold' }}>{service.itemName}</p>
        </div>
      )
  };

  render() {

    const actions = [
      <FlatButton
        label="Cancel"
        secondary={true}
        onTouchTap={e => this.setState({ deleteOpen: false })}
      />,
      <FlatButton
        label="OK"
        primary={true}
        onTouchTap={e => this.setState({ deleteOpen: false })}
      />,
    ];

    return (
      <div className="Services">

        <Toolbar>

          <ToolbarTitle text="Services" />

          <ToolbarGroup lastChild={true}>

            (
            <div className="secondary-actions">
              <RaisedButton label="Edit" secondary={true} onTouchTap={this.navigateToEdit} className="button" />
              <RaisedButton label="Delete" secondary={true} onTouchTap={e => this.setState({ deleteOpen: !this.state.deleteOpen })} className="button" />
            </div>) :

            <RaisedButton label="New" primary={true} onTouchTap={this.navigateToNew} />

          </ToolbarGroup>
        </Toolbar>

        <Dialog open={this.state.deleteOpen} title="Delete" modal={true} actions={actions}>
          { this.renderDialog(this.state.services[this.state.selected.reduce((prev, current) => current, -1)])}
        </Dialog>

        <Table fixedHeader={true} onRowSelection={e => this.setState({ selected: e })}>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>SKU</TableHeaderColumn>
              <TableHeaderColumn>Description</TableHeaderColumn>
              <TableHeaderColumn>Price</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody deselectOnClickaway={true}>
            {this.state.services.map(service => (
              <TableRow key={service.key}>
                <TableRowColumn>{service.itemName}</TableRowColumn>
                <TableRowColumn>{service.sku}</TableRowColumn>
                <TableRowColumn>{service.description}</TableRowColumn>
                <TableRowColumn>{service.price}</TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>

      </div>
    )
  }

}
