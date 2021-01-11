import React from 'react';
import { Link } from 'react-router-dom';
import { injectIntl, FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

import { Container, Card } from 'components/UI';

import heroImgSrc from 'assets/images/hero.png';
import footballImgSrc from 'assets/images/dragndrop.png';
import footballFieldImgSrc from 'assets/images/fieldtype.png';
import footballPlayersImgSrc from 'assets/images/formation.png';

import './Home.module.scss';

const Home = ({ intl }) => (
    <div className="home">
        <div className="hero">
            <Container>
                <div className="hero__items">
                    <div className="hero__item">
                        <h1>
                            <FormattedMessage
                                id="home.slogan"
                                defaultMessage="Build Your Lineup"
                            />
                        </h1>
                        <p className="hero__description">
                            <FormattedMessage
                                id="home.description"
                                defaultMessage="Create your own Football formation using Voety Lineup Builder.
                                Customize and share it using image download, save and load features."
                            />
                        </p>
                        <Link to="/lineup" className="hero__button">
                            <FormattedMessage
                                id="home.buildnow"
                                defaultMessage="Build Now"
                            />
                        </Link>
                    </div>
                    <div className="hero__item hero__item--right">
                        <img src={heroImgSrc} alt="lineup" />
                    </div>
                </div>
            </Container>
        </div>
        <div className="home__start">
            <Container>
                <h1>
                    <FormattedMessage
                        id="home.howtoplay"
                        defaultMessage="How To Play"
                    />
                </h1>
                <div className="home__cards">
                    <Card
                        customClass="home__card"
                        imageSrc={footballPlayersImgSrc}
                        imageAlt="Select Formation"
                        title={intl.formatMessage({ id: 'home.card1.title', defaultMessage: 'Select Formation' })}
                        description={intl.formatMessage({ id: 'home.card1.description', defaultMessage: 'Select one of the ready to use formations' })}
                    />
                    <Card
                        customClass="home__card"
                        imageSrc={footballFieldImgSrc}
                        imageAlt="Select Field"
                        title={intl.formatMessage({ id: 'home.card2.title', defaultMessage: 'Select Field' })}
                        description={intl.formatMessage({ id: 'home.card2.description', defaultMessage: 'Select a field type' })}
                    />
                    <Card
                        customClass="home__card"
                        imageSrc={footballImgSrc}
                        imageAlt="Drag'n Drop"
                        title={intl.formatMessage({ id: 'home.card3.title', defaultMessage: 'Drag\'n Drop' })}
                        description={intl.formatMessage({ id: 'home.card3.description', defaultMessage: 'Modify your formation via drag and drop' })}
                    />
                </div>
            </Container>
        </div>
    </div>
);

Home.propTypes = {
    intl: PropTypes.shape({
        formatMessage: PropTypes.func.isRequired,
    }).isRequired,
};

export default injectIntl(Home);
