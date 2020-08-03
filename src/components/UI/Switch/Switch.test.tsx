import React from 'react';
import { shallow } from 'enzyme';
import Switch from './Switch';

it('should render Switch correctly', () => {
    const wrapper = shallow(
        <Switch
            id="test"
            checked={false}
            handleChange={jest.fn()}
        />,
    );
    expect(wrapper).toMatchSnapshot();
});
