import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

it('should render Card correctly', () => {
    const wrapper = shallow(
        <Card
            title="Test Title"
            description="Test Description"
        />,
    );

    expect(wrapper).toMatchSnapshot();
});
