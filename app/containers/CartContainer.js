import Cart from '../components/Cart';
import { connect } from 'react-redux';
import { fetchOrderDetails, removeItemFromCart } from '../action-creators/cart';


const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    onLoadOrderDetails () { //UNSURE about user
    	const allOrderProducts = fetchOrderDetails()
    	console.log("DISPATCH TO PROPS orderDetails ", allOrderProducts)
      dispatch( allOrderProducts ) //doesn't actually take a parameter in func def
    },
    deleteItemFromCart(productId) {
      dispatch(removeItemFromCart(productId))
    }
  }
}

const mapStateToProps = ({ orderDetails }, ownProps) => {
  return { orderDetails }; //or { products: state.products }; 
}

const CartContainer = connect(
	  mapStateToProps,
	  mapDispatchToProps  
	)(Cart); 

export default CartContainer;