import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.PureComponent {

	static propTypes = {
		onUserInput: PropTypes.func.isRequired,
		inStockOnly: PropTypes.bool,
		filterText: PropTypes.string
	};

	handleChange = () => {
		this.props.onUserInput(
			this.filterTextInput.value,
			this.inStockOnlyInput.checked
		);
	};

	render() {
		return (
			<form>
				<input
					type="text"
					placeholder="Search..."
					value={this.props.filterText}
					ref={(input) => this.filterTextInput = input}
					onChange={this.handleChange}
				/>
				<p>
					<input
						type="checkbox"
						checked={this.props.inStockOnly}
						ref={(input) => this.inStockOnlyInput = input}
						onChange={this.handleChange}
					/>
					{' '}
					Only show products in stock
				</p>
			</form>
		);
	}
}

export default SearchBar;
