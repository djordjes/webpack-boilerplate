import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
	propTypes: {
		children: React.PropTypes.node
	},

	render() {
		return (
			<div>
				<h1><Link to="/">React boileplate</Link></h1>
				<ul role="nav">
					<li><Link to="/about">About</Link></li>
					<li><Link to="/products">Products</Link></li>
				</ul>
				{this.props.children}
			</div>
		);
	}
});

