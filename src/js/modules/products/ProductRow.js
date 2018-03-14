import React from 'react';
import PropTypes from 'prop-types';

function ProductRow(props) {
	const name = props.product.stocked ?
		props.product.name :
		(
			<span style={{color: 'red'}}>
				{props.product.name}
			</span>
		);

	return (
		<tr>
			<td>{name}</td>
			<td>{props.product.price}</td>
		</tr>
	);
}

ProductRow.propTypes = {
	product: PropTypes.shape({
		name:    PropTypes.string,
		stocked: PropTypes.bool
	})

};

export default ProductRow;
