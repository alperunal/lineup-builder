import React from 'react';
import cn from 'classnames';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

import GoalIcon from 'assets/icons/goal_icon.svg';
import YellowIcon from 'assets/icons/yellow_card_icon.svg';
import RedIcon from 'assets/icons/red_card_icon.svg';

import './Squad.module.scss';

const Squad = ({ players, editPlayer }) => (
    <div className="squad">
        <table className="player-table">
            <thead>
                <tr>
                    <td className="player-table__name">
                        <FormattedMessage
                            id="squad.player"
                            defaultMessage="Player"
                        />
                    </td>
                    <td className="player-table__no">
                        <FormattedMessage
                            id="squad.no"
                            defaultMessage="No"
                        />
                    </td>
                    <td className="player-table__icon">
                        <img src={GoalIcon} alt="Goal" />
                    </td>
                    <td className="player-table__icon">
                        <img src={YellowIcon} alt="Yellow Card" />
                    </td>
                    <td className="player-table__icon">
                        <img src={RedIcon} alt="Red Card" />
                    </td>
                </tr>
            </thead>
            <tbody>
                {players.map((player) => (
                    <tr key={player.id}>
                        <td
                            className={
                                cn(
                                    'player-table__name',
                                )
                            }
                        >
                            <span className="form-group">
                                <input
                                    type="text"
                                    spellCheck={false}
                                    value={player.name}
                                    onChange={(event) => editPlayer(player.id, event.target.value, player.num, player.position, player.goal || false, player.yellowCard || false, player.redCard || false)}
                                />
                            </span>
                        </td>
                        <td
                            className={
                                cn(
                                    'player-table__no',
                                )
                            }
                        >
                            <span className="form-group">
                                <input
                                    type="text"
                                    value={player.num}
                                    maxLength={2}
                                    onChange={(event) => editPlayer(player.id, player.name, event.target.value, player.position, player.goal || false, player.yellowCard || false, player.redCard || false)}
                                />
                            </span>
                        </td>
                        <td
                            className={
                                cn(
                                    'player-table__icon',
                                )
                            }
                        >
                            <span className="form-group">
                                <input
                                    type="checkbox"
                                    checked={player.goal}
                                    onChange={(event) => editPlayer(player.id, player.name, player.num, player.position, event.target.checked, player.yellowCard || false, player.redCard || false)}
                                />
                            </span>
                        </td>
                        <td
                            className={
                                cn(
                                    'player-table__icon',
                                )
                            }
                        >
                            <span className="form-group">
                                <input
                                    type="checkbox"
                                    checked={player.yellowCard}
                                    onChange={(event) => editPlayer(player.id, player.name, player.num, player.position, player.goal || false, event.target.checked, player.redCard || false)}
                                />
                            </span>
                        </td>
                        <td
                            className={
                                cn(
                                    'player-table__icon',
                                )
                            }
                        >
                            <span className="form-group">
                                <input
                                    type="checkbox"
                                    checked={player.redCard}
                                    onChange={(event) => editPlayer(player.id, player.name, player.num, player.position, player.goal || false, player.yellowCard || false, event.target.checked)}
                                />
                            </span>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

Squad.propTypes = {
    players: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            position: PropTypes.shape({
                x: PropTypes.number.isRequired,
                y: PropTypes.number.isRequired,
            }).isRequired,
            goal: PropTypes.bool.isRequired,
            yellowCard: PropTypes.bool.isRequired,
            redCard: PropTypes.bool.isRequired,
        }),
    ).isRequired,
    editPlayer: PropTypes.func.isRequired,
};

export default Squad;
