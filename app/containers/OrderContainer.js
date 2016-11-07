import Order from '../components/Order';
import { connect } from 'react-redux';
import { fetchOrderHistory } from '../action-creators/order';


const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    onLoadOrderHistory () { 
      dispatch(fetchOrderHistory()) 
    }
  }
}

const mapStateToProps = ({ orderDetails }, ownProps) => {
  return { orderDetails }; //or { products: state.products }; 
}

const OrderContainer = connect(
						  mapStateToProps,
						  mapDispatchToProps  
						)(Order); //component name

export default OrderContainer;