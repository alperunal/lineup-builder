import React from 'react';
import { shallow } from 'enzyme';
import Squad from './Squad';

it('should render Squad correctly', () => {
    const props = {
        players: [],
        editPlayer: jest.fn(),
    };
    const wrapper = shallow(<Squad {...props} />);
    expect(wrapper).toMatchSnapshot();
});
