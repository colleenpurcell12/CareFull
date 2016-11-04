import Cart from '../components/AllProducts';
import { connect } from 'react-redux';
import { fetchOrderDetails } from '../action-creators/cart';


const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    onLoadOrderDetails (user) { //UNSURE about user
      dispatch( fetchOrderDetails(user) ) //doesn't actually take a parameter in func def
    }
  }
}

const mapStateToProps = ({ orderDetails }, ownProps) => {
  return { orderDetails }; //or { products: state.products }; 
}

const CartContainer = connect(
						  mapStateToProps,
						  mapDispatchToProps  
						)(Cart); //component name

export default CartContainer;