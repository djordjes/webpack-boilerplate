import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends React.PureComponent {

	static propTypes = {
		product: PropTypes.array
	};

	state = {
		filterText:  '',
		inStockOnly: false
	};

	handleUserInput = (filterText, inStockOnly) => {
		this.setState({
			filterText:  filterText,
			inStockOnly: inStockOnly
		});
	};

	render() {
		return (
			<div>
				<SearchBar
					filterText={this.state.filterText}
					inStockOnly={this.state.inStockOnly}
					onUserInput={this.handleUserInput}
				/>
				<ProductTable
					products={this.props.products}
					filterText={this.state.filterText}
					inStockOnly={this.state.inStockOnly}
				/>
			</div>
		);
	}
}

export default FilterableProductTable;
