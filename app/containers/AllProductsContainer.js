import AllProducts from './AllProducts';
import { connect } from 'react-redux';
import fetchAllProducts from '../action-creator/products';


const mapDispatchToProps = function (dispatch, ownProps) {
  return {
  	//LOAD ALL THE Products
    onLoadProducts (products) {
      dispatch( fetchAllProducts(products) )
    }
  }
}

const mapStateToProps = ({ products }, ownProps) => {
  return { products };
}

//alternative
// const mapStateToProps = ({ products }, ownProps) => {
//   return { products: state.products }; 
// }

const AllProductsContainer = connect(
						  mapStateToProps,
						  mapDispatchToProps  
						)(Products);

export default AllProductsContainer;