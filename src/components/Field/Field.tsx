import React from "react";
// import Grass from "../../assets/images/grass.png";
import Player from "../Player/Player";
import { IPlayer } from "../../constants/model";
import { Wrapper, FieldLines, GrassTexture, GoalLine, PenaltyLine, MiddleLine, MiddleCircle } from './style';

interface IProps {
  width: number;
  height: number;
  players: IPlayer[];
  mainColor: string;
  secondaryColor: string;
  numberColor: string;
}

const Field: React.FC<IProps> = ({
  width,
  height,
  players,
  mainColor,
  secondaryColor,
  numberColor,
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

export default Field;
