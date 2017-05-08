import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { TextField, RaisedButton } from 'material-ui';

import UpdateService from '../UpdateService';

describe('<UpdateService>', () => {
  it('has a save button', () => {
    const wrapper = shallow(<UpdateService/>);
    expect(wrapper.containsMatchingElement(<RaisedButton type="submit" primary={true} label="Save" className="button" />)).to.be.true;
  });
});