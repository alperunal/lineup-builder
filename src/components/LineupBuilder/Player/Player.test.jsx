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
    goal: true,
    yellowCard: true,
    redCard: false,
    setPlayerPosition: jest.fn(),
  };
  const wrapper = shallow(
    <Player
      name={props.name}
      x={props.x}
      y={props.y}
      num={props.num}
      id={props.id}
      mainColor={props.mainColor}
      secondaryColor={props.secondaryColor}
      goal={props.goal}
      yellowCard={props.yellowCard}
      redCard={props.redCard}
      setPlayerPosition={props.setPlayerPosition}
    />,
  );
  expect(wrapper).toMatchSnapshot();
});
