import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';
import { lightTheme, darkTheme } from './Theme/theme';
import { GlobalStyles } from './Theme/global';
import { useDarkMode } from './Theme/useDarkMode';
import Toggle from './Theme/Toggle';
import navbar from './Navbar/navbar';
import block from './Block/block';
import lengua from './Lengua/lengua';
import direction from './Cards/card';
import proyects from './Proyects/proyects';
import footer from './Footer/footer';
import './app.scss';

const Div = styled.div`
  background-color: ${({ theme }) => theme.navbar};
  display: flex;
`;

const App = () => {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Router>
          <Div className="#">
            <Route path="/" component={navbar} />
            <Toggle theme={theme} toggleTheme={toggleTheme} />
          </Div>
          <Div className="x">
            <Route path="/" component={block} />
          </Div>
          <Route path="/" component={lengua} />
          <Container className="direction">
            <Route path="/" component={direction} />
          </Container>
          <Route path="/" component={proyects} />
          <Route path="/" component={footer} />
        </Router>
      </>
    </ThemeProvider>
  );
};

export default App;
