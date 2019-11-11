import React from "react";
import { IPlayer, IPosition } from "../../constants/model";
import { Wrapper, PositionList, PositionListItem, Input } from './style';

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
  const isValidNumber = (num: string): boolean => {
    const playerNum = parseInt(num, 10);
    return playerNum > 0 && playerNum < 100;
  };

  return (
    <Wrapper>
      <div>
        <PositionList>
          {players.map(player => (
            <PositionListItem key={player.id}>
              <Input
                type="text"
                style={{ width: "80%", marginRight: "5px" }}
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
              <Input
                type="number"
                style={{ width: "20%" }}
                value={player.num}
                onChange={event =>
                  editPlayer(
                    player.id,
                    player.name,
                    parseInt(event.target.value ? event.target.value : "0", 10),
                    player.position,
                  )
                }
              />
            </PositionListItem>
          ))}
        </PositionList>
      </div>
    </Wrapper>
  );
};

export default Squad;
