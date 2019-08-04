import React from "react";
import styled from "styled-components";
import Grass from "../../assets/images/grass.png";
import Player from "../Player/Player";
import { IFormation } from "../../constants/model";

interface IProps {
  width: number;
  height: number;
  formation: IFormation;
}

interface IWrapperProps {
  w: number;
  h: number;
}

const Field: React.FC<IProps> = ({
  width,
  height,
  formation: { players, mainColor, secondaryColor, numberColor },
}: IProps) => {
  return (
    <Wrapper w={width} h={height}>
      <FieldLines>
        <GrassTexture />
        <GoalLine />
        <GoalLine bottom />
        <PenaltyLine />
        <PenaltyLine bottom />
        <MiddleLine />
        <MiddleCircle />
      </FieldLines>
      {players.map(player => (
        <Player
          key={player.id}
          name={player.name}
          num={player.num}
          x={player.position.x}
          y={player.position.y}
          mainColor={mainColor}
          secondaryColor={secondaryColor}
          numberColor={numberColor}
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  height: ${(props: IWrapperProps) => `${props.h}px`};
  width: ${(props: IWrapperProps) => `${props.w}px`};
  background-color: #1b7e45;
`;

const GrassTexture = styled.div`
  position: absolute;
  background-image: 'url(${Grass})';
  background-repeat: repeat;
  background-size: 75px 75px;
  background-position: -20px -20px;
`;

const FieldLines = styled.div`
  width: 99%;
  height: 99%;
  border: solid 3px rgba(255, 255, 255, 0.5);
  position: relative;
`;

const GoalLine = styled.div`
  bottom: ${({ bottom }: { bottom?: boolean }) => (bottom ? "-2px" : "auto")};
  top: ${({ bottom }: { bottom?: boolean }) => (bottom ? "auto" : "-2px")};
  width: 16%;
  height: 6%;
  border: solid 3px rgba(255, 255, 255, 0.5);
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const PenaltyLine = styled.div`
  position: absolute;
  width: 44%;
  height: 16%;
  border: solid 3px rgba(255, 255, 255, 0.5);
  border-bottom: ${({ bottom }: { bottom?: boolean }) =>
    bottom ? "none" : ""};
  border-top: ${({ bottom }: { bottom?: boolean }) => (bottom ? "" : "none")};
  left: 0;
  right: 0;
  margin: auto;
  bottom: ${({ bottom }: { bottom?: boolean }) => (bottom ? "0" : "auto")};
  top: ${({ bottom }: { bottom?: boolean }) => (bottom ? "auto" : "0")};
`;

const MiddleLine = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 0;
  border: solid 2px rgba(255, 255, 255, 0.5);
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: 0;
`;

const MiddleCircle = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: 20%;
  height: 16%;
  border: solid 3px rgba(255, 255, 255, 0.5);
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: 0;
  margin: auto;
  border-radius: 50%;
`;

export default Field;
