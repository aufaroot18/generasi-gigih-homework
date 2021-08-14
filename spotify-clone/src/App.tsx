import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import theme from './theme/custom';
import Navbar from './components/navbar';
import Routes from './routes';
import './App.css';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <Routes />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
