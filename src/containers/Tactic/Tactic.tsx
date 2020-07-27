/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { injectIntl, FormattedMessage, IntlShape } from 'react-intl';
import ColorPicker from 'components/UI/ColorPicker/ColorPicker';
import Field from 'components/TacticBuilder/Field/Field';
import Squad from 'components/TacticBuilder/Squad/Squad';
import { IPosition, IPlayer } from 'constants/model';
import { ground, formations } from 'constants/constants';
import { generatePlayers, getFormation } from 'helpers/player-generator';
import { capture, save, load } from 'helpers/actions';
import { Container } from 'components/UI';
import captureIcon from 'assets/icons/photo.svg';
import saveIcon from 'assets/icons/save.svg';
import loadIcon from 'assets/icons/upload.svg';
import './Tactic.module.scss';

interface IProps {
    intl: IntlShape;
}

const Tactic: React.FC<IProps> = ({ intl }: IProps) => {
    const [name, setName] = useState('Default');
    const [mainColor, setMainColor] = useState('#a32638');
    const [secondaryColor, setSecondaryColor] = useState('#fcb514');
    const [numberColor, setNumberColor] = useState('#ffffff');
    const [fieldType, setFieldType] = useState('grass');
    const [players, setPlayers] = useState(generatePlayers());
    const [formation, setFormation] = useState('4-2-3-1');

    function editPlayer(id: string, nName: string | null, nNum: string | null, nPosition: IPosition, nGoal: boolean | null, nYellowCard: boolean | null, nRedCard: boolean | null) {
        setPlayers(
            players.map((player) => {
                if (player.id === id) {
                    return {
                        name: nName !== null ? nName : player.name,
                        num: nNum !== null ? nNum : player.num,
                        id,
                        position: nPosition !== null ? nPosition : player.position,
                        goal: nGoal !== null ? nGoal : player.goal,
                        yellowCard: nYellowCard !== null ? nYellowCard : player.yellowCard,
                        redCard: nRedCard !== null ? nRedCard : player.redCard,
                    };
                }
                return player;
            }),
        );
    }

    function downloadImage() {
        const field = document.getElementById('field');
        if (field) {
            capture(field);
        }
    }

    function saveTactic() {
        save(name, mainColor, secondaryColor, numberColor, players);
    }

    function loadTactic() {
        load(setName, setMainColor, setSecondaryColor, setNumberColor, setPlayers);
    }

    function changeFormation(newFormation: string) {
        const positions = getFormation(newFormation);
        setPlayers(players.map((player: IPlayer, i: number) => {
            player.position = positions[i] || player.position;
            return player;
        }));
        setFormation(newFormation);
    }

    function setPlayerPosition(id: string, x: number, y: number) {
        editPlayer(id, null, null, { x, y }, null, null, null);
    }

    return (
        <div className="tactic">
            <Container>
                <h1 className="heading">
                    <FormattedMessage
                        id="lineup.heading"
                        defaultMessage="Lineup Builder"
                    />
                </h1>
                <div className="tactic__tactic-field">
                    <div className="tactic__field-wrapper">
                        <Field
                            width={ground.width}
                            height={ground.height}
                            players={players}
                            mainColor={mainColor}
                            secondaryColor={secondaryColor}
                            numberColor={numberColor}
                            id="field"
                            fieldType={fieldType}
                            setPlayerPosition={setPlayerPosition}
                        />
                        <ul className="tactic__actions">
                            <li>
                                <button
                                    type="button"
                                    onClick={downloadImage}
                                    title={intl.formatMessage({ id: 'lineup.downloadimage', defaultMessage: 'Download Image' })}
                                >
                                    <img
                                        src={captureIcon}
                                        alt={intl.formatMessage({ id: 'lineup.downloadimage', defaultMessage: 'Download Image' })}
                                        title={intl.formatMessage({ id: 'lineup.downloadimage', defaultMessage: 'Download Image' })}
                                    />
                                </button>
                            </li>
                            <li>
                                <button
                                    type="button"
                                    onClick={saveTactic}
                                    title={intl.formatMessage({ id: 'lineup.save', defaultMessage: 'Save' })}
                                >
                                    <img
                                        src={saveIcon}
                                        alt={intl.formatMessage({ id: 'lineup.save', defaultMessage: 'Save' })}
                                        title={intl.formatMessage({ id: 'lineup.save', defaultMessage: 'Save' })}
                                    />
                                </button>
                            </li>
                            <li>
                                <button
                                    type="button"
                                    onClick={loadTactic}
                                    title={intl.formatMessage({ id: 'lineup.load', defaultMessage: 'Load' })}
                                >
                                    <img
                                        src={loadIcon}
                                        alt={intl.formatMessage({ id: 'lineup.load', defaultMessage: 'Load' })}
                                        title={intl.formatMessage({ id: 'lineup.load', defaultMessage: 'Load' })}
                                    />
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="options">
                        <div className="options__header">
                            <h3>
                                <FormattedMessage
                                    id="lineup.options.title"
                                    defaultMessage="Lineup Options"
                                />
                            </h3>
                        </div>
                        <div className="options__content">
                            <div className="form-group">
                                <label className="label" htmlFor="tacticName">
                                    <FormattedMessage
                                        id="lineup.options.name"
                                        defaultMessage="Lineup Name"
                                    />
                                </label>
                                <input
                                    className="input"
                                    id="tacticName"
                                    name="tacticName"
                                    type="text"
                                    value={name}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <select onChange={(event: React.ChangeEvent<HTMLSelectElement>) => setFieldType(event?.target.value)} value={fieldType}>
                                    <option value="grass">
                                        {intl.formatMessage({ id: 'lineup.options.groundtype.grass', defaultMessage: 'Grass' })}
                                    </option>
                                    <option value="wet-grass">
                                        {intl.formatMessage({ id: 'lineup.options.groundtype.wet-grass', defaultMessage: 'Wet Grass' })}
                                    </option>
                                    <option value="dry-grass">
                                        {intl.formatMessage({ id: 'lineup.options.groundtype.dry-grass', defaultMessage: 'Dry Grass' })}
                                    </option>
                                    <option value="hard">
                                        {intl.formatMessage({ id: 'lineup.options.groundtype.hard', defaultMessage: 'Hard' })}
                                    </option>
                                </select>
                            </div>
                            <div className="form-group">
                                <select
                                    onChange={(event: React.ChangeEvent<HTMLSelectElement>) => changeFormation(event?.target.value)}
                                    value={formation}
                                >
                                    {formations.map((_formation) => (
                                        <option value={_formation}>{_formation}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="color-options">
                                <div className="color-option">
                                    <span className="tactic__label">
                                        <FormattedMessage
                                            id="lineup.options.color.primary"
                                            defaultMessage="Primary"
                                        />
                                    </span>
                                    <ColorPicker color={mainColor} setColor={setMainColor} />
                                </div>
                                <div className="color-option">
                                    <span className="tactic__label">
                                        <FormattedMessage
                                            id="lineup.options.color.secondary"
                                            defaultMessage="Secondary"
                                        />
                                    </span>
                                    <ColorPicker color={secondaryColor} setColor={setSecondaryColor} />
                                </div>
                                <div className="color-option">
                                    <span className="tactic__label">
                                        <FormattedMessage
                                            id="lineup.options.color.number"
                                            defaultMessage="Number"
                                        />
                                    </span>
                                    <ColorPicker color={numberColor} setColor={setNumberColor} />
                                </div>
                            </div>
                            <Squad players={players} editPlayer={editPlayer} />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default injectIntl(Tactic);
