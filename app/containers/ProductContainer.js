import Product from '../components/Product';
import { connect } from 'react-redux';
import  fetchOneProduct from '../action-creators/product';
import { addItemToCart } from '../action-creators/cart';

//mapDispatchToProps-->creates onLoadProduct that runs fetchOneProduct
//the back end fetch is a SQL query that returns the actual instance
const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    postItemToCart (product) {
      dispatch (addItemToCart(product))
    }
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