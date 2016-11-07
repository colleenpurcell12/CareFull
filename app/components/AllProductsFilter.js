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

      let filterProducts = products.filter (product => product.name.toLowerCase().match(filter))
        if(this.props.routeParams && this.props.routeParams.categoryName){
          filterProducts=filterProducts.filter
          (product => product.category.includes(this.props.routeParams.categoryName))
        }

      return (
        <div>
          <FilteredProducts 
            products={
              filter? filterProducts : products
            }
          filter={filter}
          handleChange={this.handleChange}
          postItemToCart={this.props.postItemToCart}
          />
        </div>
      )
    }
}


