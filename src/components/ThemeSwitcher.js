import React, { useState, createContext, useContext } from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { Switch } from '@mui/material';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

const ThemeSwitcher = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Switch
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
          name="themeSwitcher"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeSwitcher;
