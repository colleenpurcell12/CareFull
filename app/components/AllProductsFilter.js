import React, { Component } from 'react';
// import {Link} from 'react-router';

export default (FilteredProducts) => 
  class AllProductsFilter extends React.Component {

    constructor (props) {
      super(props);
      this.state = { filter: '' };
      this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
      this.props.onLoadAllProducts(); 
    }
    handleChange (evt) {
      const filter = evt.target.value.toLowerCase();
      this.setState({ filter });
    }

    render() { 
      const { filter } = this.state;
      const { products } = this.props;
      return (
        <div>
          <FilteredProducts 
            products={
              filter? 
              products.filter (product => product.name.toLowerCase().match(filter)) 
              : products
            }
          filter={filter}
          handleChange={this.handleChange}
          />
        </div>
      )
    }
}


