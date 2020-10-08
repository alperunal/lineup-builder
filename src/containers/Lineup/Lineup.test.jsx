import React from 'react';
import { shallow } from 'enzyme';
import Lineup from './Lineup';

it('should render Lineup correctly', () => {
    const wrapper = shallow(<Lineup />);
    expect(wrapper).toMatchSnapshot();
});
