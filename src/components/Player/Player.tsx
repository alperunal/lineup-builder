import React from "react";
import styled from "styled-components";

interface IProps {
  name: string;
  num: number;
  x: number;
  y: number;
  mainColor: string;
  secondaryColor: string;
  numberColor?: string;
}

interface IStyleProps {
  mainColor: string;
  secondaryColor: string;
  numberColor: string;
  x: number;
  y: number;
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

const Wrapper = styled.div`
  border-radius: 50%;
  width: 24px;
  height: 24px;
  position: absolute;
  top: 0;
  left: 0;
  border: 2px solid ${({ secondaryColor }: IStyleProps) => secondaryColor};
  background-color: ${({ mainColor }: IStyleProps) => mainColor};
  transform: ${({ x, y }: IStyleProps) => `translate(${x}px, ${y}px)`};
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 720px) {
    width: 36px;
    height: 36px;
    border: 3px solid ${({ secondaryColor }: IStyleProps) => secondaryColor};
  }
`;

const Num = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: ${({ numberColor }: { numberColor: string }) => numberColor};

  @media (min-width: 720px) {
    font-size: 16px;
  }
`;

const Name = styled.div`
  position: absolute;
  top: 30px;
  font-size: 13px;
  font-weight: bold;
  color: #fff;
  text-shadow: 2px 2px #000;

  @media (min-width: 720px) {
    top: 42px;
    font-size: 16px;
  }
`;

export default Player;
