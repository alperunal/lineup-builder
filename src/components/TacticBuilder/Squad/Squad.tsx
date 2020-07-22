import React from 'react';
import classnames from 'classnames';
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
                    <td className="player-table__name">Name</td>
                    <td className="player-table__no"># No</td>
                    <td className="player-table__icon"><img src={GoalIcon} alt="Goal" /></td>
                    <td className="player-table__icon"><img src={YellowIcon} alt="Yellow Card" /></td>
                    <td className="player-table__icon"><img src={RedIcon} alt="Red Card" /></td>
                </tr>
            </thead>
            <tbody>
                {players.map((player: IPlayer) => (
                    <tr key={player.id}>
                        <td
                            className={
                                classnames(
                                    'player-table__name',
                                )
                            }
                        >
                            <span className="form-group">
                                <input
                                    type="text"
                                    spellCheck={false}
                                    value={player.name}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => editPlayer(player.id, event.target.value, player.num, player.position, player.goal || false, player.yellowCard || false, player.redCard || false)}
                                />
                            </span>
                        </td>
                        <td
                            className={
                                classnames(
                                    'player-table__no',
                                )
                            }
                        >
                            <span className="form-group">
                                <input
                                    type="text"
                                    value={player.num}
                                    maxLength={2}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => editPlayer(player.id, player.name, event.target.value, player.position, player.goal || false, player.yellowCard || false, player.redCard || false)}
                                />
                            </span>
                        </td>
                        <td
                            className={
                                classnames(
                                    'player-table__icon',
                                )
                            }
                        >
                            <span className="form-group">
                                <input
                                    type="checkbox"
                                    checked={player.goal}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => editPlayer(player.id, player.name, player.num, player.position, event.target.checked, player.yellowCard || false, player.redCard || false)}
                                />
                            </span>
                        </td>
                        <td
                            className={
                                classnames(
                                    'player-table__icon',
                                )
                            }
                        >
                            <span className="form-group">
                                <input
                                    type="checkbox"
                                    checked={player.yellowCard}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => editPlayer(player.id, player.name, player.num, player.position, player.goal || false, event.target.checked, false)}
                                />
                            </span>
                        </td>
                        <td
                            className={
                                classnames(
                                    'player-table__icon',
                                )
                            }
                        >
                            <span className="form-group">
                                <input
                                    type="checkbox"
                                    checked={player.redCard}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => editPlayer(player.id, player.name, player.num, player.position, player.goal || false, false, event.target.checked)}
                                />
                            </span>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default Squad;
