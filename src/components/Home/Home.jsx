import React from 'react';
import { Link } from 'react-router-dom';
import { injectIntl, FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

import { Container } from 'components/UI';

import heroImgSrc from 'assets/images/hero.png';

import './Home.scss';

const Home = () => (
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
              <FormattedMessage id="home.buildnow" defaultMessage="Build Now" />
            </Link>
          </div>
          <div className="hero__item hero__item--right">
            <img src={heroImgSrc} alt="lineup" />
          </div>
        </div>
      </Container>
    </div>
    <div className="contact">
      <Container>
        <form action="https://formspree.io/f/meqnwrpq" method="POST" className="form-group contact-form">
          <h2>Feedback</h2>
          <h3>We would like your feedback to improve our service</h3>
          <label>
            <div>Your email:</div>
            <input placeholder="info@voety.net" type="email" name="email" required />
          </label>
          <label>
            <div>Your message:</div>
            <textarea placeholder="Your suggestions about lineup builder" name="message" rows="4" required />
          </label>
          <button type="submit">Send</button>
        </form>
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
