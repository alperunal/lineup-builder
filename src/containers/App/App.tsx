import React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from 'components/Header/Header';
import Home from 'components/Home/Home';
import Container from 'components/UI/Container/Container';
import Footer from 'components/Footer/Footer';
import Tactic from 'containers/Tactic/Tactic';
import { Card } from 'components/UI';

const App: React.FC = () => (
    <Router>
        <Header />
        <Container>
            <div style={{ marginTop: '50px' }}>
                <Card>
                    <Switch>
                        <Route path="/teams">
                            Teams
                        </Route>
                        <Route path="/tactic">
                            <Tactic />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Card>
            </div>
        </Container>
        <Footer />
    </Router>
);

export default hot(App);
