import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

it('should render Footer correctly', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
});
