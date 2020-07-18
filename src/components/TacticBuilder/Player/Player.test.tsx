import React from 'react';
import { shallow } from 'enzyme';
import Player from './Player';

it('should render Player correctly', () => {
    const props = {
        name: 'Wesley Sneijder',
        x: 150,
        y: 200,
        num: '10',
        id: '10',
        mainColor: '#FFFFFF',
        secondaryColor: '#000000',
    };
    const wrapper = shallow(<Player {...props} />);
    expect(wrapper).toMatchSnapshot();
});
