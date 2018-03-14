import React from 'react';
import PropTypes from 'prop-types';
import ProductRow from './ProductRow';
import ProductCategoryRow from './ProductCategoryRow';

function ProductTable(props) {
	console.log(props);

	const rows         = [];
	let lastCategory = null;

	props.products.forEach((product) => {
		if (product.name.indexOf(props.filterText) === -1 || (!product.stocked && props.inStockOnly)) {
			return;
		}

		if (product.category !== lastCategory) {
			rows.push(<ProductCategoryRow category={product.category} key={product.category}/>);
		}

		rows.push(<ProductRow product={product} key={product.name}/>);
		lastCategory = product.category;
	});

	return (
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Price</th>
				</tr>
			</thead>
			<tbody>{rows}</tbody>
		</table>
	);
}

ProductTable.propTypes = {
	products: PropTypes.array,
	filterText: PropTypes.string,
	inStockOnly: PropTypes.bool
};

export default ProductTable;
