import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { theme } from './style/theme';

interface AppProps {
  children?: React.ReactNode;
}

export const App: React.FC<AppProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        {children}
      </div>
    </ThemeProvider>
  );
};

export default App;
