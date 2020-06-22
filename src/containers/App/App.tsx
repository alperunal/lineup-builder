import React from 'react';
import { hot } from 'react-hot-loader/root';

import Header from '../../components/Header/Header';
import Container from '../../components/UI/Container/Container';
import Footer from '../../components/Footer/Footer';
import Tactic from '../Tactic/Tactic';
import { Card } from '../../style/VoetUI';

const App = () => (
    <div>
        <Header />
        <Container>
            <div style={{ marginTop: '50px' }}>
                <Card>
                    <Tactic />
                </Card>
            </div>
            <Footer />
        </Container>
    </div>
);

export default hot(App);
