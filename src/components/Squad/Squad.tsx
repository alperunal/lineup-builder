import React from 'react';
import { IPlayer, IPosition } from '../../constants/model';
import { Input } from '../../style/VoetUI';
import './Squad.scss';

interface IProps {
    players: IPlayer[];
    editPlayer: (id: string, nName: string, nNum: string, nPosition: IPosition) => void;
}

const Squad = ({ players, editPlayer }: IProps) => {
    return (
        <div className="squad">
            <div>
                <ul className="squad__position-list">
                    {players.map(player => (
                        <li className="squad__position-list-item" key={player.id}>
                            <Input
                                type="text"
                                style={{ width: '80%', marginRight: '5px' }}
                                spellCheck={false}
                                value={player.name}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => editPlayer(player.id, event.target.value, player.num, player.position)}
                            />
                            <Input
                                type="text"
                                style={{ width: '20%' }}
                                value={player.num}
                                maxLength={2}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => editPlayer(player.id, player.name, event.target.value, player.position)}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Squad;
