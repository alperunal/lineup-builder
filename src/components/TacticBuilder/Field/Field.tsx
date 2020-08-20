import React from 'react';
import Player from 'components/TacticBuilder/Player/Player';
import { IPlayer } from 'constants/model';
import { PositionArea } from 'constants/position';
import grassTile from 'assets/tiles/grass-tile.png';
import wetGrassTile from 'assets/tiles/wet-grass-tile.png';
import dryGrassTile from 'assets/tiles/dry-grass-tile.png';
import './Field.module.scss';

type Props = {
    width: number;
    height: number;
    players: IPlayer[];
    mainColor: string;
    secondaryColor: string;
    numberColor: string;
    fieldType: string;
    id: string;
    setPlayerPosition: (id: string, x: number, y: number) => void;
    showPositionAreas: boolean;
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

const Field: React.FC<Props> = ({
    width, height, players, mainColor, secondaryColor, numberColor, id, fieldType, setPlayerPosition, showPositionAreas,
}: Props) => {
    const positionList = [
        new PositionArea('ST', '#4d4dff'),
        new PositionArea('WL', '#a862ea'),
        new PositionArea('WR', '#ff4dff'),
        new PositionArea('AMC', '#ff6680'),
        new PositionArea('ML', '#ff4d4d'),
        new PositionArea('MC', '#ea9a62'),
        new PositionArea('MR', '#ffff4d'),
        new PositionArea('DMC', '#c2c2ff'),
        new PositionArea('WBL', '#e1c9f8'),
        new PositionArea('FBL', '#ffc2ff'),
        new PositionArea('DC', '#ffb3bf'),
        new PositionArea('WBR', '#ffbebe'),
        new PositionArea('FBR', '#f6dbc6'),
        new PositionArea('GK', '#ffe7be'),
    ];

    return (
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
            {showPositionAreas ? (
                <>
                    {positionList.map((position: PositionArea) => (
                        position.getArea()
                    ))}
                </>
            ) : null}
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
                        goal={player.goal || false}
                        yellowCard={player.yellowCard || false}
                        redCard={player.redCard || false}
                        setPlayerPosition={setPlayerPosition}
                    />
                ))}
            </div>
        </div>
    );
};

export default Field;
