import React from 'react';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/header'

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes />
  </BrowserRouter>
)

export default App;
