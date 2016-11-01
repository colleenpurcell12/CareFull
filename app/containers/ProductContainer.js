import Product from './Product';
import { connect } from 'react-redux';
import fetchAllProducts from '../action-creator/products';

//mapDispatchToProps-->creates onLoadProduct that runs fetchOneProduct
//the back end fetch is a SQL query that returns the actual instance
const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    onLoadProduct (currentProduct) {
      dispatch( fetchOneProduct(currentProduct) ) //takes a product ID
    }
  }
}

// const mapStateToProps = ({ product }, ownProps) => {
//   return { product }; 
// }

const mapStateToProps = ({ currentProduct }, ownProps) => {
  return { currentProduct: state.currentProduct }; 
}

const ProductContainer = connect(
						  mapStateToProps,
						  mapDispatchToProps  
						)(currentProduct);

export default ProductContainer;