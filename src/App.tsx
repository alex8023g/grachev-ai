import React from 'react';
// import 'normalize.css';
// import '../node_modules/modern-normalize/modern-normalize.css';
// import logo from './logo.svg';
import './App.css';
import { Header } from './Header';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
}

export default App;
