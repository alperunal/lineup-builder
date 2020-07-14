import React, { useState } from 'react';
import { injectIntl, FormattedMessage, IntlShape } from 'react-intl';
import ColorPicker from 'components/UI/ColorPicker/ColorPicker';
import Field from 'components/TacticBuilder/Field/Field';
import Squad from 'components/TacticBuilder/Squad/Squad';
import { IPosition } from 'constants/model';
import { GROUND } from 'constants/constants';
import { generateData } from 'helpers/player-generator';
import { capture, save, load } from 'helpers/actions';
import { Container } from 'components/UI';
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
    const [players, setPlayers] = useState(generateData());

    function editPlayer(id: string, nName: string, nNum: string, nPosition: IPosition) {
        setPlayers(
            players.map((player) => {
                if (player.id === id) {
                    return {
                        name: nName !== null ? nName : player.name,
                        num: nNum !== null ? nNum : player.num,
                        id,
                        position: nPosition !== null ? nPosition : player.position,
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
                            width={GROUND.width}
                            height={GROUND.height}
                            players={players}
                            mainColor={mainColor}
                            secondaryColor={secondaryColor}
                            numberColor={numberColor}
                            id="field"
                            fieldType={fieldType}
                        />
                        <ul className="tactic__actions">
                            <li>
                                <button
                                    type="button"
                                    onClick={downloadImage}
                                >
                                    <FormattedMessage
                                        id="lineup.downloadimage"
                                        defaultMessage="Download Image"
                                    />
                                </button>
                            </li>
                            <li>
                                <button
                                    type="button"
                                    onClick={saveTactic}
                                >
                                    <FormattedMessage
                                        id="lineup.save"
                                        defaultMessage="Save"
                                    />
                                </button>
                            </li>
                            <li>
                                <button
                                    type="button"
                                    onClick={loadTactic}
                                >
                                    <FormattedMessage
                                        id="lineup.load"
                                        defaultMessage="Load"
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
                                    <input
                                        className="input"
                                        id="tacticName"
                                        type="text"
                                        value={name}
                                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)}
                                    />
                                </label>
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
