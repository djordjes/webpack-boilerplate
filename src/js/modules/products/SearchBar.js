"use strict";

var React = require('react');

var SearchBar = React.createClass({
    handleChange() {
        this.props.onUserInput(
            this.filterTextInput.value,
            this.inStockOnlyInput.checked
        );
    },
    render: function () {
        return (
            <form>
                <input
                    type="text"
                    placeholder="Search..."
                    value={this.props.filterText}
                    ref={(input) => this.filterTextInput = input}
                    onChange={this.handleChange} />
                <p>
                    <input
                        type="checkbox"
                        checked={this.props.inStockOnly}
                        ref={(input) => this.inStockOnlyInput = input}
                        onChange={this.handleChange} />
                    {' '}
                    Only show products in stock
                </p>
            </form>
        );
    }
});

module.exports = SearchBar;