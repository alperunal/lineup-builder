import React from 'react';
import './Player.scss';

interface IProps {
    name: string;
    num: number;
    x: number;
    y: number;
    mainColor: string;
    secondaryColor: string;
    numberColor?: string;
    handleDragStart: (event: React.DragEvent) => void;
    id: string;
}

const Player = ({ name, num, x, y, mainColor, secondaryColor, numberColor, handleDragStart, id }: IProps) => {
    return (
        <div
            className="player"
            style={{
                backgroundColor: mainColor,
                border: `2px solid ${secondaryColor}`,
                left: `${x}px`,
                top: `${y}px`,
            }}
            onDragStart={handleDragStart}
            id={id}
            draggable
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
    );
};

export default Player;
