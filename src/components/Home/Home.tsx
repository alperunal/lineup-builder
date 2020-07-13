import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { Container, Card } from 'components/UI';
import heroImgSrc from 'assets/images/hero.png';
import footballImgSrc from 'assets/images/football.jpg';
import footballFieldImgSrc from 'assets/images/football-field.jpg';
import footballPlayersImgSrc from 'assets/images/football-players.jpg';
import './Home.module.scss';

const Home: React.FC = () => (
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
                <h1>How To Play</h1>
                <div className="home__cards">
                    <Card
                        customClass="home__card"
                        imageSrc={footballPlayersImgSrc}
                        imageAlt="Select Formation"
                        title="Select Formation"
                        description="Select one of the ready to use formations"
                    />
                    <Card
                        customClass="home__card"
                        imageSrc={footballFieldImgSrc}
                        imageAlt="Select Field"
                        title="Select Field"
                        description="Select a field type"
                    />
                    <Card
                        customClass="home__card"
                        imageSrc={footballImgSrc}
                        imageAlt="Drag'n Drop"
                        title="Drag'n Drop"
                        description="Modify your formation via drag and drop"
                    />
                </div>
            </Container>
        </div>
    </div>
);

export default Home;
