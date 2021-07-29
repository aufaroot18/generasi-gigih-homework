/* Package */
import React from 'react';

/* Component */
import Navbar from './components/navbar';
import Routes from './routes';

/* CSS */
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return(
    <Router>
      <Navbar />
      <Routes />
    </Router>
  );
}

export default App;
