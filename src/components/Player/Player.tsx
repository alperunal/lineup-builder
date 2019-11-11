import React from "react";
import { Wrapper, Num, Name } from './style';

interface IProps {
  name: string;
  num: number;
  x: number;
  y: number;
  mainColor: string;
  secondaryColor: string;
  numberColor?: string;
}

const Player = ({
  name,
  num,
  x,
  y,
  mainColor,
  secondaryColor,
  numberColor,
}: IProps) => {
  return (
    <Wrapper
      x={x}
      y={y}
      mainColor={mainColor}
      secondaryColor={secondaryColor}
      numberColor={numberColor}
      draggable={true}
      onDragStart={(event) => {console.log('dragging', event)}}
    >
      <Num numberColor={numberColor}>
        <span>{num}</span>
      </Num>
      <Name>
        <span>{name}</span>
      </Name>
    </Wrapper>
  );
};

export default Player;
