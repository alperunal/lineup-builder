import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import cn from 'classnames';
import StoreContext from 'store';

import Header from 'components/Header/Header';
import Home from 'components/Home/Home';
import Footer from 'components/Footer/Footer';
import Tactic from 'containers/Tactic/Tactic';
import Playbook from 'containers/Playbook/Playbook';

import messagesEN from 'languages/en.json';
import messagesTR from 'languages/tr.json';

import { paths } from 'constants/routes';
import { themeType, languageType } from 'constants/types';

import './App.module.scss';

const App: React.FC = () => {
    const [theme, setTheme] = useState(() => localStorage.getItem('THEME') as themeType || 'light');
    const [language, setLanguage] = useState(() => localStorage.getItem('LANGUAGE') as languageType || 'en');

    const changeTheme = (newTheme: themeType) => {
        setTheme(newTheme);
        localStorage.setItem('THEME', newTheme);
    };

    const changeLanguage = (newLanguage: languageType) => {
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
                theme,
                language,
                changeLanguage,
                changeTheme,
            }}
        >
            <IntlProvider
                locale={language}
                messages={messages[language]}
            >
                <Router>
                    <div
                        className={
                            cn(
                                'app',
                                { dark: theme === 'dark' },
                            )
                        }
                    >
                        <Header />
                        <div className="content">
                            <Switch>
                                <Route path={paths.lineup}>
                                    <Tactic />
                                </Route>
                                <Route path={paths.playbook}>
                                    <Playbook />
                                </Route>
                                <Route path={paths.root}>
                                    <Home />
                                </Route>
                            </Switch>
                        </div>
                        <Footer />
                    </div>
                </Router>
            </IntlProvider>
        </StoreContext.Provider>
    );
};

export default hot(App);
