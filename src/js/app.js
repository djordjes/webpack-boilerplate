import React from 'react';
import {Link, Route} from 'react-router-dom';
import About from './modules/About';
import Products from './modules/products/container';
import { hot } from 'react-hot-loader';

function App() {
	return (
		<div>
			<h1><Link to="/">React boileplate</Link></h1>
			<ul role="nav">
				<li><Link to="/about">About</Link></li>
				<li><Link to="/products">Products</Link></li>
			</ul>
			<Route
				path="/about"
				component={About}
			/>
			<Route
				path="/products"
				component={Products}
			/>
		</div>
	);
}

export default hot(module)(App);
