import React from 'react';
import './Footer.scss';
import { Card } from '../../style/VoetUI';

const Footer = () => {
    return (
        <div className="footer">
            <Card>
                <span>
                    Made with ❤ by <a href="https://www.alperunal.com/">Alper Unal</a>
                </span>
            </Card>
        </div>
    );
};

export default Footer;
