// https://css-tricks.com/a-dark-mode-toggle-with-react-and-themeprovider/

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';
import Toggle from './Toggle';
import Content from './content';
import {useDarkMode} from './useDarkMode'

function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  const themeCopy = theme.toUpperCase();

  if(!componentMounted) {
    return <div />
  }

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <h1>It's a {themeCopy === 'LIGHT' ? 'LIGHT theme' : 'DARK theme'}!</h1>
        <Content theme={theme}/>
        <footer>
          <span>Credits:</span>
          <small><b>Sun</b> icon made by <a href="https://www.flaticon.com/authors/smalllikeart">smalllikeart</a> from <a href="https://www.flaticon.com">www.flaticon.com</a></small>
          <small><b>Moon</b> icon made by <a href="https://www.freepik.com/home">Freepik</a> from <a href="https://www.flaticon.com">www.flaticon.com</a></small>
        </footer>
      </>
    </ThemeProvider>
  );
}


export default App;
