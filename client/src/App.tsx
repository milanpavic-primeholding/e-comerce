import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductsPage from './pages/products-page/ProductsPage';
import ErrorPage from './pages/error-page/ErrorPage';
import Header from './components/header/Header';
import { Container } from '@mui/material';

function App() {
  return (
    <Container>
      <Router>
        <Header />
        <Routes>
          <Route path={'/'} element={<ProductsPage />} />
          <Route path={'*'} element={<ErrorPage />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
