import React from "react";
// import Grass from "../../assets/images/grass.png";
import Player from "../Player/Player";
import { IPlayer } from "../../constants/model";
import { Wrapper, FieldLines, GrassTexture, GoalLine, PenaltyLine, MiddleLine, MiddleCircle, DragLayer } from './style';

interface IProps {
  width: number;
  height: number;
  players: IPlayer[];
  mainColor: string;
  secondaryColor: string;
  numberColor: string;
  move: (event: any) => void;
  drop: (event: React.DragEvent) => void;
  handleDragStart: (event: React.DragEvent) => void;
}

const Field: React.FC<IProps> = ({
  width,
  height,
  players,
  mainColor,
  secondaryColor,
  numberColor,
  move,
  drop,
  handleDragStart
}: IProps) => {
  return (
    <Wrapper w={width} h={height} onDrop={drop} onDragOver={(event: React.DragEvent) => event.preventDefault()} onMouseMove={move}>
      <FieldLines>
        <GrassTexture />
        <GoalLine />
        <GoalLine bottom />
        <PenaltyLine />
        <PenaltyLine bottom />
        <MiddleLine />
        <MiddleCircle />
      </FieldLines>
      <DragLayer />
      {players.map(player => (
        <Player
          key={player.id}
          id={player.id}
          name={player.name}
          num={player.num}
          x={player.position.x}
          y={player.position.y}
          mainColor={mainColor}
          secondaryColor={secondaryColor}
          numberColor={numberColor}
          handleDragStart={handleDragStart}
        />
      ))}
    </Wrapper>
  );
};

export default Field;
