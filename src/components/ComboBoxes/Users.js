import React, { Component } from 'react';
import { DropDownMenu, MenuItem } from 'material-ui';
import Base from '../../firebase';

export default class extends Component {

  constructor(props) {
    super(props);
    const { selected } = props;
    this.state = { selected, users: [] };
  }

  componentDidMount() {
    Base.syncState(`users`, {
      context: this,
      state: 'users',
      asArray: true,
      then(){
        this.setState({ selected: this.state.users[0].key })
      }
    });
  }

  render() {
    return (
      <DropDownMenu onChange={(event, index, value) => this.setState({ selected: value })} value={this.state.selected}>
        { this.state.users.map(user =>
          <MenuItem key={user.key} value={user.key} label={`${user.firstName} ${user.lastName}`}>{user.firstName} {user.lastName}</MenuItem>) }
      </DropDownMenu>
    )
  }

}
