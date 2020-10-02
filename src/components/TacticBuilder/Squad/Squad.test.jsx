import React from 'react';
import { shallow } from 'enzyme';
import Squad from './Squad';

it('should render Squad correctly', () => {
    const wrapper = shallow(
        <Squad
            players={[]}
            editPlayer={jest.fn()}
        />,
    );
    expect(wrapper).toMatchSnapshot();
});
