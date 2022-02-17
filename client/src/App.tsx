import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import ProductsPage from './pages/products-page/ProductsPage';
import ProductPage from './pages/product-page/ProductPage';
import ErrorPage from './pages/error-page/ErrorPage';
import Header from './components/header/Header';
import RegisterPage from './pages/register-page/RegisterPage';

function App() {
	return (
		<Container>
			<Router>
				<Header />
				<Routes>
					<Route path={'/'} element={<ProductsPage />} />
					<Route path={'/product/:id'} element={<ProductPage />} />
					<Route path={'/register'} element={<RegisterPage />} />
					<Route path={'*'} element={<ErrorPage />} />
				</Routes>
			</Router>
		</Container>
	);
}

export default App;
