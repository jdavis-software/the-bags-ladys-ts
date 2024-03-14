import React from 'react';
import logo from './assets/logo.jpg';
import './App.css';
import { products } from './products';
import { Product } from './components/product/product';

function App() {
	return (
		<div className="app">
			<header className="header">
				<div className="logo-container">
					<div className="pacifico logo-text">The Bag Ladys.com</div>
				</div>
			</header>
			<main className="main">
				<div className="logo-container">
					<img src={logo} className="logo" alt="logo" />
				</div>
			</main>
			<div>Website coming soon...</div>
			<div className="product-container">
				{products.map((product, index) => {
					return <Product key={index} imageSrc={product.imgSrc} name={product.name} moq={product.moq} description={product.description} />;
				})}
			</div>
		</div>
	);
}

export default App;
