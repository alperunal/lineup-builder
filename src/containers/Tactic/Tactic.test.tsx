import React from 'react';
import { shallow } from 'enzyme';
import Tactic from './Tactic';

it('renders Container correctly', () => {
    const wrapper = shallow(<Tactic />);

    expect(wrapper).toMatchSnapshot();
});
