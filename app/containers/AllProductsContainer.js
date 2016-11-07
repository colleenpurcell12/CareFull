import AllProducts from '../components/AllProducts';
import AllProductsFilter from '../components/AllProductsFilter';
import { connect } from 'react-redux';
import { fetchAllProducts } from '../action-creators/products';
import { addItemToCart } from '../action-creators/cart';


const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    onLoadAllProducts () { //products
      dispatch( fetchAllProducts() ) //doesn't actually take a parameter in func def
    },
    postItemToCart (product) {
    	dispatch (addItemToCart(product))
    }
  }
}

const mapStateToProps = ({ products }, ownProps) => {
  return { products }; //or { products: state.products }; 
}


const AllProductsContainer = connect(
						  mapStateToProps,
						  mapDispatchToProps  
						)(AllProductsFilter(AllProducts)); //component name

export default AllProductsContainer;