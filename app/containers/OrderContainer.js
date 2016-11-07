import Order from '../components/Order';
import { connect } from 'react-redux';
import { fetchOrderHistory } from '../action-creators/order';


const mapDispatchToProps = (dispatch, ownProps) => ({
  onLoadOrderHistory: () => dispatch(fetchOrderHistory())
})

const mapStateToProps = ({ orderHistory }) => ({ orderHistory })

const OrderContainer = connect(
	  mapStateToProps,
	  mapDispatchToProps  
	)(Order);

export default OrderContainer;