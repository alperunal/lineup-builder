/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect, useContext } from 'react';
import { injectIntl, FormattedMessage, IntlShape } from 'react-intl';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import StoreContext from 'store';

import ColorPicker from 'components/UI/ColorPicker/ColorPicker';
import Field from 'components/TacticBuilder/Field/Field';
import Squad from 'components/TacticBuilder/Squad/Squad';
import { IPosition, IPlayer } from 'constants/model';
import { ground, formations } from 'constants/constants';
import { generatePlayers, getFormation } from 'helpers/player-generator';
import {
    capture, save, load, share, loadSharedLineup,
} from 'helpers/actions';
import { Block, Container } from 'components/UI';

import captureIcon from 'assets/icons/photo.svg';
import saveIcon from 'assets/icons/save.svg';
import shareIcon from 'assets/icons/share.svg';
import loadIcon from 'assets/icons/upload.svg';
import clipIcon from 'assets/icons/clippy.svg';

import './Tactic.module.scss';

type Props = {
    intl: IntlShape,
};

const ShareMessage = ({ link, intl }: { link: string, intl: IntlShape }) => (
    <div className="share-message">
        <h3 className="share-message__header">
            <FormattedMessage
                id="lineup.sharemessage.heading"
                defaultMessage="Link to Share"
            />
        </h3>
        <input
            type="text"
            disabled
            value={link}
            className="share-message__input"
        />
        <span>
            <button
                type="button"
                onClick={
                    () => {
                        const textArea = document.createElement('textarea');
                        textArea.value = link;
                        textArea.style.top = '0';
                        textArea.style.left = '0';
                        textArea.style.position = 'fixed';

                        document.body.appendChild(textArea);
                        textArea.focus();
                        textArea.select();
                        document.execCommand('copy');
                        document.body.removeChild(textArea);
                    }
                }
            >
                <FormattedMessage
                    id="lineup.sharemessage.clipboard"
                    defaultMessage="Copy to Clipboard"
                />
                {' '}
                <img src={clipIcon} width="13" alt={intl.formatMessage({ id: 'lineup.sharemessage.clipboard', defaultMessage: 'Copy to Clipboard' })} />
            </button>
        </span>
    </div>
);

const Tactic: React.FC<Props> = ({ intl }: Props) => {
    const [name, setName] = useState('Default');
    const [mainColor, setMainColor] = useState('#a32638');
    const [secondaryColor, setSecondaryColor] = useState('#fcb514');
    const [numberColor, setNumberColor] = useState('#ffffff');
    const [fieldType, setFieldType] = useState('grass');
    const [players, setPlayers] = useState(generatePlayers());
    const [formation, setFormation] = useState('4-2-3-1');
    const { lineupId } = useParams() as { lineupId: string };
    const context = useContext(StoreContext);

    useEffect(() => {
        if (lineupId) {
            loadSharedLineup(lineupId, setName, setMainColor, setSecondaryColor, setNumberColor, setPlayers, context?.changeLoading);
        }
    }, []);

    function editPlayer(
        id: string,
        nName: string | null,
        nNum: string | null,
        nPosition: IPosition,
        nGoal: boolean | null,
        nYellowCard: boolean | null,
        nRedCard: boolean | null,
    ): void {
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

    function downloadImage(): void {
        const field = document.getElementById('field');
        if (field) {
            capture(field);
        }
    }

    function saveTactic(): void {
        save(name, mainColor, secondaryColor, numberColor, players);
    }

    function loadTactic(): void {
        load(setName, setMainColor, setSecondaryColor, setNumberColor, setPlayers);
    }

    async function shareTactic(): Promise<any> {
        const url = await share(name, mainColor, secondaryColor, numberColor, players, context?.changeLoading);
        if (url !== 'error') {
            toast(<ShareMessage link={url} intl={intl} />, {
                position: 'top-center',
                autoClose: false,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: false,
            });
        }
    }

    function changeFormation(newFormation: string): void {
        const positions = getFormation(newFormation);
        setPlayers(players.map((player: IPlayer, i: number) => {
            player.position = positions[i] || player.position;
            return player;
        }));
        setFormation(newFormation);
    }

    function setPlayerPosition(id: string, x: number, y: number): void {
        editPlayer(id, null, null, { x, y }, null, null, null);
    }

    return (
        <div className="tactic">
            <Container>
                <ToastContainer />
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
                            showPositionAreas={false}
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
                            <li>
                                <button
                                    type="button"
                                    onClick={shareTactic}
                                    title={intl.formatMessage({ id: 'lineup.share', defaultMessage: 'Share' })}
                                >
                                    <img
                                        src={shareIcon}
                                        alt={intl.formatMessage({ id: 'lineup.share', defaultMessage: 'Share' })}
                                        title={intl.formatMessage({ id: 'lineup.share', defaultMessage: 'Share' })}
                                    />
                                </button>
                            </li>
                        </ul>
                    </div>
                    <Block
                        title={intl.formatMessage({ id: 'lineup.options.title', defaultMessage: 'Lineup Options' })}
                        customClass="options"
                    >
                        <div className="form-group">
                            <label className="label" htmlFor="tacticName">
                                <FormattedMessage
                                    id="lineup.options.name"
                                    defaultMessage="Lineup Name"
                                />
                            </label>
                            <input
                                className="input form-control"
                                id="tacticName"
                                name="tacticName"
                                type="text"
                                value={name}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <select
                                onChange={(event: React.ChangeEvent<HTMLSelectElement>) => setFieldType(event?.target.value)}
                                value={fieldType}
                                className="form-control"
                            >
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
                                className="form-control"
                            >
                                {formations.map((_formation) => (
                                    <option
                                        key={_formation}
                                        value={_formation}
                                    >
                                        {_formation}
                                    </option>
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
                    </Block>
                </div>
            </Container>
        </div>
    );
};

export default injectIntl(Tactic);
