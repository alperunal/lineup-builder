import React from 'react';
import { IPlayer, IPosition } from 'constants/model';
import GoalIcon from 'assets/icons/goal_icon.svg';
import YellowIcon from 'assets/icons/yellow_card_icon.svg';
import RedIcon from 'assets/icons/red_card_icon.svg';
import './Squad.module.scss';

interface IProps {
    players: IPlayer[];
    editPlayer: (id: string, nName: string, nNum: string, nPosition: IPosition, nGoal: boolean, nYellowCard: boolean, nRedCard: boolean) => void;
}

const Squad: React.FC<IProps> = ({ players, editPlayer }: IProps) => (
    <div className="squad">
        <table className="player-table">
            <thead>
                <tr>
                    <td>Name</td>
                    <td># No</td>
                    <td><img src={GoalIcon} alt="Goal" /></td>
                    <td><img src={YellowIcon} alt="Yellow Card" /></td>
                    <td><img src={RedIcon} alt="Red Card" /></td>
                </tr>
            </thead>
            <tbody>
                {players.map((player: IPlayer) => (
                    <tr key={player.id}>
                        <td className="form-group">
                            <input
                                type="text"
                                spellCheck={false}
                                value={player.name}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => editPlayer(player.id, event.target.value, player.num, player.position, player.goal || false, player.yellowCard || false, player.redCard || false)}
                            />
                        </td>
                        <td className="form-group">
                            <input
                                type="text"
                                value={player.num}
                                maxLength={2}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => editPlayer(player.id, player.name, event.target.value, player.position, player.goal || false, player.yellowCard || false, player.redCard || false)}
                            />
                        </td>
                        <td className="form-group">
                            <input
                                type="checkbox"
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => editPlayer(player.id, player.name, player.num, player.position, event.target.checked, player.yellowCard || false, player.redCard || false)}
                            />
                        </td>
                        <td className="form-group">
                            <input
                                type="checkbox"
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => editPlayer(player.id, player.name, player.num, player.position, player.goal || false, event.target.checked, player.redCard || false)}
                            />
                        </td>
                        <td className="form-group">
                            <input
                                type="checkbox"
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => editPlayer(player.id, player.name, player.num, player.position, player.goal || false, player.yellowCard || false, event.target.checked)}
                            />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default Squad;
