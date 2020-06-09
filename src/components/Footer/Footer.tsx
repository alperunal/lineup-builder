import React from 'react';
import './Footer.scss';
import { Card } from '../../style/VoetUI';

const Footer = () => {
    return (
        <div className="footer">
            <Card>
                <span>
                    Made with love by Alper Unal.
                </span>
                <p><a href="https://github.com/alperunal/voet">Github</a></p>
            </Card>
        </div>
    );
};

export default Footer;
