import React from 'react';
import Draggable from 'react-draggable';
import PropTypes from 'prop-types';

import goalIcon from 'assets/icons/soccer-ball.svg';
import yellowCardIcon from 'assets/icons/yellow-card.svg';
import redCardIcon from 'assets/icons/red-card.svg';
import yellowToRedCardIcon from 'assets/icons/yellow-to-red.svg';

import './Player.module.scss';

const Player = ({
    name, num, x, y, mainColor, secondaryColor, numberColor, id, goal, yellowCard, redCard, setPlayerPosition,
}) => (
    <Draggable
        bounds={{
            left: 0,
            top: 0,
            right: 320,
            bottom: 470,
        }}
        position={{ x, y }}
        onStop={(e, data) => setPlayerPosition(id, data.x, data.y)}
    >
        <div
            className="player"
            style={{
                backgroundColor: mainColor,
                border: `2px solid ${secondaryColor}`,
            }}
            id={id}
        >
            <div
                className="player__num"
                style={{
                    color: numberColor,
                }}
            >
                <span>{num}</span>
            </div>
            <div className="player__name">
                <span>{name}</span>
            </div>
            {goal && (
                <div className="player__goal">
                    <img src={goalIcon} alt="goal" />
                </div>
            )}
            {yellowCard && (
                <div className="player__card">
                    <img src={yellowCardIcon} alt="yellow card" />
                </div>
            )}
            {redCard && (
                <div className="player__card">
                    <img src={redCardIcon} alt="red card" />
                </div>
            )}
            {yellowCard && redCard && (
                <div className="player__card">
                    <img src={yellowToRedCardIcon} alt="yellow red card" />
                </div>
            )}
        </div>
    </Draggable>
);

Player.propTypes = {
    name: PropTypes.string.isRequired,
    num: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    mainColor: PropTypes.string.isRequired,
    secondaryColor: PropTypes.string.isRequired,
    numberColor: PropTypes.string,
    goal: PropTypes.bool.isRequired,
    yellowCard: PropTypes.bool.isRequired,
    redCard: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    setPlayerPosition: PropTypes.func.isRequired,
};

Player.defaultProps = {
    numberColor: '#FFFFFF',
};

export default Player;
