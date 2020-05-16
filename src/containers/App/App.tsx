import React from 'react';
import Header from '../../components/Header/Header';
import Container from '../../components/UI/Container/Container';
import Tactic from '../Tactic/Tactic';
import { Card } from '../../style/VoetUI';

const App = () => {
    return (
        <div>
            <Header />
            <Container>
                <div style={{ marginTop: '50px' }}>
                    <Card>
                        <Tactic />
                    </Card>
                </div>
            </Container>
        </div>
    );
};

export default App;
