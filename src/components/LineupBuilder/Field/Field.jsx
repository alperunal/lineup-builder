import React from 'react';
import PropTypes from 'prop-types';

import Player from 'components/LineupBuilder/Player/Player';
import { PositionArea } from 'constants/position';

import grassTile from 'assets/tiles/grass-tile.png';
import wetGrassTile from 'assets/tiles/wet-grass-tile.png';
import dryGrassTile from 'assets/tiles/dry-grass-tile.png';

import './Field.module.scss';

function getFieldStyle(fieldType) {
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

const Field = ({
    width, height, players, mainColor, secondaryColor, numberColor, id, fieldType, setPlayerPosition, showPositionAreas,
}) => {
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
                    {positionList.map((position) => (
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

Field.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    players: PropTypes.arrayOf(
        PropTypes.shape().isRequired,
    ).isRequired,
    mainColor: PropTypes.string.isRequired,
    secondaryColor: PropTypes.string.isRequired,
    numberColor: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    fieldType: PropTypes.string.isRequired,
    setPlayerPosition: PropTypes.func.isRequired,
    showPositionAreas: PropTypes.func.isRequired,
};

export default Field;
