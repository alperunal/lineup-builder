import React from "react";
import { Wrapper, Num, Name } from './style';

interface IProps {
  id: string;
  name: string;
  num: number;
  x: number;
  y: number;
  mainColor: string;
  secondaryColor: string;
  numberColor?: string;
  handleDragStart: (event: React.DragEvent) => void; 
}

const Player = ({
  name,
  num,
  x,
  y,
  mainColor,
  secondaryColor,
  numberColor,
  handleDragStart,
  id
}: IProps) => {
  return (
    <Wrapper
      x={x}
      y={y}
      mainColor={mainColor}
      secondaryColor={secondaryColor}
      numberColor={numberColor}
      draggable
      onDragStart={handleDragStart}
      id={id}
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
