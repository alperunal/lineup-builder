import React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from 'components/Header/Header';
import Home from 'components/Home/Home';
import Footer from 'components/Footer/Footer';
import Tactic from 'containers/Tactic/Tactic';

const App: React.FC = () => (
    <Router>
        <Header />
        <div>
            <Switch>
                <Route path="/lineup">
                    <Tactic />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </div>
        <Footer />
    </Router>
);

export default hot(App);
