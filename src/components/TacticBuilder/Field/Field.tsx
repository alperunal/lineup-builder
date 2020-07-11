import React from 'react';
import Player from 'components/TacticBuilder/Player/Player';
import { IPlayer } from 'constants/model';
import grassTile from 'assets/tiles/grass-tile.png';
import wetGrassTile from 'assets/tiles/wet-grass-tile.png';
import dryGrassTile from 'assets/tiles/dry-grass-tile.png';
import './Field.module.scss';

interface IProps {
    width: number;
    height: number;
    players: IPlayer[];
    mainColor: string;
    secondaryColor: string;
    numberColor: string;
    fieldType: string;
    id: string;
}

function getFieldStyle(fieldType: string) {
    switch (fieldType) {
    case 'hard':
        return 'none';
    case 'grass':
        return `url('${grassTile}')`;
    case 'dry-grass':
        return `url('${dryGrassTile}')`;
    case 'wet-grass':
        return `url('${wetGrassTile}')`;
    default:
        return `url('${grassTile}')`;
    }
}

const Field: React.FC<IProps> = ({
    width, height, players, mainColor, secondaryColor, numberColor, id, fieldType,
}: IProps) => (
    <div
        className="field"
        style={{
            maxHeight: `${height}px`,
            maxWidth: `${width}px`,
            backgroundImage: getFieldStyle(fieldType),
        }}
        id={id}
    >
        <div className="field__field-lines">
            <div className="field__grass-texture" />
            <div
                className="field__goal-line"
                style={{
                    top: '-2px',
                }}
            />
            <div
                className="field__goal-line"
                style={{
                    bottom: '-2px',
                }}
            />
            <div
                className="field__penalty-line"
                style={{
                    borderTop: 'none',
                    top: 0,
                }}
            />
            <div
                className="field__penalty-line"
                style={{
                    borderBottom: 'none',
                    bottom: 0,
                }}
            />
            <div className="field__middle-line" />
            <div className="field__middle-circle" />
        </div>
        <div className="field__drag-layer">
            {players.map((player) => (
                <Player
                    key={player.id}
                    id={player.id}
                    name={player.name}
                    num={player.num}
                    x={player.position.x}
                    y={player.position.y}
                    mainColor={mainColor}
                    secondaryColor={secondaryColor}
                    numberColor={numberColor}
                />
            ))}
        </div>
    </div>
);

export default Field;
