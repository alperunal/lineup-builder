import React from 'react';
import { shallow } from 'enzyme';
import Block from './Block';

it('should render Block correctly', () => {
  const wrapper = shallow(
    <Block title="Test">
      <div>Some children components</div>
      <span>Some childrens x2</span>
    </Block>,
  );
  expect(wrapper).toMatchSnapshot();
});
