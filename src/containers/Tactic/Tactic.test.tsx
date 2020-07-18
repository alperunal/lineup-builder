import React from 'react';
import { shallow } from 'enzyme';
import Tactic from './Tactic';

it('should render Tactic correctly', () => {
    const wrapper = shallow(<Tactic />);
    expect(wrapper).toMatchSnapshot();
});
