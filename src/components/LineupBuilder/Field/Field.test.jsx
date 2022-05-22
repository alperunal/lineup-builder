import React from 'react';
import { shallow } from 'enzyme';
import Field from './Field';

it('should render Field correctly', () => {
  const props = {
    width: 350,
    height: 500,
    players: [],
    mainColor: '#FFFFFF',
    secondaryColor: '#000000',
    numberColor: '#CCCCCC',
    fieldType: 'grass',
    id: '1',
  };
  const wrapper = shallow(<Field {...props} />);
  expect(wrapper).toMatchSnapshot();
});
