import React, { ChangeEvent } from "react";
import styled from "styled-components";

import { IPlayer, IPosition } from "../../constants/model";

interface IProps {
  players: IPlayer[];
  editPlayer: (
    id: string,
    nName: string,
    nNum: number,
    nPosition: IPosition,
  ) => void;
}

const Squad = ({ players, editPlayer }: IProps) => {
  return (
    <Wrapper>
      <div>
        <PositionList>
          {players.map(player => (
            <li>
              <Input
                spellCheck={false}
                value={player.name}
                onChange={event =>
                  editPlayer(
                    player.id,
                    event.target.value,
                    player.num,
                    player.position,
                  )
                }
              />
            </li>
          ))}
        </PositionList>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 10px;
`;

const Select = styled.select`
  width: 100%;
  padding-left: 10px;
  height: 40px;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  font-family: "Roboto";
  font-size: 20px;
`;

const Input = styled.input`
  width: 300px;
  padding-left: 10px;
  height: 40px;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  font-family: "Roboto";
  font-size: 20px;
  box-sizing: border-box;
  margin-bottom: 5px;

  &::placeholder {
    color: #ddd;
  }
`;

const PositionList = styled.ul`
  list-style-type: none;
  margin: 20px 0 0 0;
  padding: 0;
`;

export default Squad;
