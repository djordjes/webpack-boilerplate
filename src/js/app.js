import React from 'react';
import { render } from 'react-dom';

import { Router, Route , hashHistory } from 'react-router';

import Product from './modules/products/container';

render((
	<Router history={hashHistory}>
		<Route path="/" component={Product}/>
	</Router>
), document.getElementById('app'));
