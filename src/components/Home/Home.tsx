import React from 'react';
import { Container, Card } from 'components/UI';
import heroImgSrc from 'assets/images/hero.png';
import './Home.scss';

const Home: React.FC = () => (
    <div className="home">
        <div className="home__hero">
            <Container>
                <div className="home__hero-items">
                    <div className="home__hero-item">
                        <h1>Build Your Line-up</h1>
                    </div>
                    <div className="home__hero-item home__hero-item--right">
                        <img src={heroImgSrc} alt="lineup" />
                    </div>
                </div>
            </Container>
        </div>
        <div className="home__start">
            <Container>
                <h1>Start with National Teams</h1>
                <h2>Select one of the team templates.</h2>
                <div className="cards">
                    <Card
                        customClass="home__card"
                        imageSrc="https://tailwindcss.com/img/card-top.jpg"
                        imageAlt="Netherlands"
                        title="Netherlands"
                        description="2020 Home Example"
                    />
                </div>
            </Container>
        </div>
    </div>
);

export default Home;
