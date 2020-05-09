import React from 'react';
import Container from '../UI/Container/Container';
import './Header.scss';

const Header = () => {
    return (
        <div className="header">
            <div className="header__bar">
                <Container>
                    <div className="header__content">
                        <div className="header__logo">
                            <div className="header__logo-text">Voet.</div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Header;
