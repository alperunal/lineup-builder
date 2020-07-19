import React, { useEffect } from 'react';
import Draggable from 'react-draggable';
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
    setPlayerPosition: (id: string, x: number, y: number) => void;
}

const Player: React.FC<IProps> = ({
    name, num, x, y, mainColor, secondaryColor, numberColor, id, setPlayerPosition,
}: IProps) => {
    return (
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
            </div>
        </Draggable>
    );
}

Player.defaultProps = {
    numberColor: '#FFFFFF',
};

export default Player;
