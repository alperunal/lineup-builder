import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import { Switch, Route } from 'react-router-dom';
import { toast } from 'react-toastify';
import cn from 'classnames';
import StoreContext from 'store';

import Header from 'components/Header/Header';
import Home from 'components/Home/Home';
import Footer from 'components/Footer/Footer';
import Lineup from 'containers/Lineup/Lineup';
import { Spinner } from 'components/UI';

import messagesEN from 'languages/en.json';
import messagesTR from 'languages/tr.json';

import Routes from 'routes';

import './App.module.scss';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
const App = () => {
  const [theme, setTheme] = useState(() => (typeof window !== 'undefined'
    ? localStorage.getItem('THEME') || 'light'
    : 'light'));
  const [language, setLanguage] = useState(() => (typeof window !== 'undefined'
    ? localStorage.getItem('LANGUAGE') || 'en'
    : 'en'));
  const [isLoading, changeLoading] = useState(false);

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('THEME', newTheme);
    }
  };

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    if (typeof window !== 'undefined') {
      localStorage.setItem('LANGUAGE', newLanguage);
    }
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
        isLoading,
        changeLanguage,
        changeTheme,
        changeLoading,
      }}
    >
      <IntlProvider locale={language} messages={messages[language]}>
        <div className={cn('app', { dark: theme === 'dark' })}>
          {isLoading ? <Spinner /> : null}
          <Header />
          <div className="content">
            <Switch>
              <Route path={`${Routes.lineup.path}/:lineupId`}>
                <Lineup />
              </Route>
              <Route path={Routes.lineup.path}>
                <Lineup />
              </Route>
              <Route path={Routes.home.path}>
                <Home />
              </Route>
            </Switch>
          </div>
          <Footer />
        </div>
      </IntlProvider>
    </StoreContext.Provider>
  );
};

export default App;
