import React from 'react';

import { Container } from 'components/UI';

import imageSrc from 'assets/images/logo.png';

import './Footer.module.scss';

const Footer = () => (
    <footer className="footer">
        <Container>
            <div className="footer__logo">
                <img src={imageSrc} alt="Voet" />
            </div>
            <div className="footer__copyright">
                <span className="footer__copyright-text">
                    Copyright © 2020 Voety. All rights reserved.
                </span>
                <span className="footer__made-by">
                    Made with ❤ by
                    {' '}
                    <a href="https://www.alperunal.com/">Alper Unal</a>
                </span>
            </div>
        </Container>
    </footer>
);

export default Footer;
