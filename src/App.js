import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import useDarkMode from './hooks/useDarkMode';
import { lightTheme, darkTheme } from './theme';
import GlobalStyle from './theme/GlobalStyle';
import AppWrapper from './components/AppWrapper/index';
import TopMenu from './containers/TopMenu';
import Header from './containers/Header';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import WorkDetails from './pages/WorkDetails';
import Contact from './pages/Contact';

const App = () => {
  const [mode, setMode] = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Router>
        <TopMenu
          isMenuOpen={isMenuOpen}
          closeMenu={() => setIsMenuOpen(false)}
        />
        <AppWrapper isMenuOpen={isMenuOpen}>
          <Header
            setTheme={setMode}
            onOpenMenu={setIsMenuOpen}
            isMenuOpen={isMenuOpen}
          />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/work/details/:workId" component={WorkDetails} />
            <Route path="/work" component={Work} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </AppWrapper>
      </Router>
    </ThemeProvider>
  );
};

export default App;
