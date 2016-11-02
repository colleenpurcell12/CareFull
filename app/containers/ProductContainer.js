import Product from '../components/Product';
import { connect } from 'react-redux';
import  fetchOneProduct from '../action-creators/product';

//mapDispatchToProps-->creates onLoadProduct that runs fetchOneProduct
//the back end fetch is a SQL query that returns the actual instance
const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    // onLoadProduct (currentProduct) {
    //   dispatch( fetchOneProduct(currentProduct) ) 

    // }
    // onLoadSingleProduct: function (currentProduct) {
    // 	this.props.currentProduct = currentProduct
      //const currentProduct = ownProps.params.currentProduct;
      //const thunk = fetchOneProduct(currentProduct);
      //dispatch(thunk);
      //takes a product, then uses its id in the fetch route
    // }
  }
}

const mapStateToProps = ({ currentProduct, reviews }, ownProps) => {
  return { currentProduct, reviews}; 
}

const ProductContainer = connect(
						  mapStateToProps,
						  mapDispatchToProps  
						)(Product); //component name, not state object key

export default ProductContainer;