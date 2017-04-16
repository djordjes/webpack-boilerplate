import React from 'react';
import {render} from 'react-dom';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import App from './App';
import About from './modules/About';
import Products from './modules/Products/container';

render((
	<Router>

		<Route>
			<div>
			<Route
				path="/"
				component={App}
			/>
			<Route
				path="/about"
				component={About}
			/>
			<Route
				path="/products"
				component={Products}
			/></div>
		</Route>

	</Router>
), document.getElementById('app'));
