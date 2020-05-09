import React from 'react';
import styled from 'styled-components';

import Header from '../../components/Header/Header';
import Container from '../../components/UI/Container/Container';
import Tactic from '../Tactic/Tactic';
import { Card } from '../../style/VoetUI';

const App = () => {
    return (
        <div>
            <Header />
            <Container>
                <Content>
                    <Card>
                        <Tactic />
                    </Card>
                </Content>
            </Container>
        </div>
    );
};

const Content = styled.div`
    margin-top: 50px;
`;

export default App;
