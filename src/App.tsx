import React from 'react';
// import 'normalize.css';
// import '../node_modules/modern-normalize/modern-normalize.css';
// import logo from './logo.svg';
import './App.css';
import { Header } from './Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Portfolio } from './Portfolio';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
