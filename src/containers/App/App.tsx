import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import StoreContext from 'store';
import Header from 'components/Header/Header';
import Home from 'components/Home/Home';
import Footer from 'components/Footer/Footer';
import Tactic from 'containers/Tactic/Tactic';
import messagesEN from 'languages/en.json';
import messagesTR from 'languages/tr.json';

const App: React.FC = () => {
    const [theme, setTheme] = useState(() => localStorage.getItem('THEME') || 'light');
    const [language, setLanguage] = useState(() => localStorage.getItem('LANGUAGE') || 'en');

    const changeTheme = (newTheme: string) => {
        setTheme(newTheme);
        localStorage.setItem('THEME', newTheme);
    };

    const changeLanguage = (newLanguage: string) => {
        setLanguage(newLanguage);
        localStorage.setItem('LANGUAGE', newLanguage);
    };

    const messages = {
        en: messagesEN,
        tr: messagesTR,
    };

    return (
        <StoreContext.Provider
            value={{
                theme, language, changeLanguage, changeTheme,
            }}
        >
            <IntlProvider
                locale={language}
                messages={language === 'en' ? messages.en : messages.tr}
            >
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
            </IntlProvider>
        </StoreContext.Provider>
    );
};

export default hot(App);
