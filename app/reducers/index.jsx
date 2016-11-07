import { combineReducers } from 'redux'
import productsReducer from './products'
import productReducer from './product'
import reviewReducer from './review'
import cartReducer from './cart'
import checkoutReducer from './checkout'
import orderHistoryReducer from './order'


const rootReducer = combineReducers({
	auth: require('./auth').default,  
	currentProduct: productReducer,
	products: productsReducer,
	reviews: reviewReducer,
	orderDetails: cartReducer,
	orderHistory: orderHistoryReducer,
	payment_shipping_details: checkoutReducer
})
//UNSURE ABOUT THE LAST TWO

export default rootReducer

