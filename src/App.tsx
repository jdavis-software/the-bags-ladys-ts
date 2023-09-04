import React from 'react';
import logo from './assets/logo.jpg';
import './App.css';
import { products } from './products';
import { Product } from './components/product/product';

function App() {
	return (
		<div className="app">
			<header className="header">
				<p className="pacifico">The Bag Ladys.com</p>
			</header>
			<main className="main">
				<div className="logo-container">
					<img src={logo} className="logo" alt="logo" />
				</div>
				<div className="product-container">
					{products.map((product, index) => {
						return <Product key={index} imageSrc={product.imgSrc} name={product.name} moq={product.moq} description={product.description} />;
					})}
				</div>
			</main>
		</div>
	);
}

export default App;
