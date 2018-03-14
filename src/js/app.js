import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function App(props) {
	return (
		<div>
			<h1><Link to="/">React boileplate</Link></h1>
			<ul role="nav">
				<li><Link to="/about">About</Link></li>
				<li><Link to="/products">Products</Link></li>
			</ul>
			{props.children}
		</div>
	);
}

App.propTypes = {
	children: PropTypes.node
};

export default App;
