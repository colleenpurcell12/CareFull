import Albums from './Albums';
import { connect } from 'react-redux';
import fetchAllProducts from '../action-creator/products';


const mapDispatchToProps = function (dispatch, ownProps) {
  return {
  	//LOAD ALL THE ALBUMS
    onLoadProducts (products) {
      dispatch( fetchAllProducts(products) )
    }
  }
}

const mapStateToProps = ({ products }, ownProps) => {
  return { products };
}


const ProductContainer = connect(
						  mapStateToProps,
						  mapDispatchToProps  
						)(Products);

export default AllProductsContainer;