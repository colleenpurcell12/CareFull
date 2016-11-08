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
      //take products from back end dispatch method in container, which employs the async action creator fetch, 
      //puts it on the state and this makes it a prop
    }


    handleChange (evt) {
      const filter = evt.target.value.toLowerCase();
      this.setState({ filter });
    }

    render() { 
      const { filter } = this.state;
      console.log("this.props",this.props)
      let { products } = this.props;
      if(filter) products = products.filter (product => product.name.toLowerCase().match(filter))
       if(this.props.routeParams && this.props.routeParams.categoryName){
        //alert(this.props.routeParams.categoryName)
         products=products.filter
         (product => product.category.includes(this.props.routeParams.categoryName))
       }

     return (
       <div>
         <FilteredProducts 
           products={
             products
           }
         filter={filter}
         handleChange={this.handleChange}
         postItemToCart={this.props.postItemToCart}
         />
       </div>
      )
    }
}


