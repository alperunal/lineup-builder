import React from 'react';
import Draggable from 'react-draggable';
import goalIcon from 'assets/icons/soccer-ball.svg';
import yellowCardIcon from 'assets/icons/yellow-card.svg';
import redCardIcon from 'assets/icons/red-card.svg';
import './Player.module.scss';

interface IProps {
    name: string;
    num: string;
    x: number;
    y: number;
    mainColor: string;
    secondaryColor: string;
    numberColor?: string;
    id: string;
    goal: boolean;
    yellowCard: boolean;
    redCard: boolean;
    setPlayerPosition: (id: string, x: number, y: number) => void;
}

const Player: React.FC<IProps> = ({
    name, num, x, y, mainColor, secondaryColor, numberColor, id, goal, yellowCard, redCard, setPlayerPosition,
}: IProps) => (
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
        </div>
    </Draggable>
);

Player.defaultProps = {
    numberColor: '#FFFFFF',
};

export default Player;
