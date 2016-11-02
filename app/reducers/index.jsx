import { combineReducers } from 'redux'
import products from './products'
import product from './product'



const rootReducer = combineReducers({
	auth: require('./auth').default,  
	product,
	products
})

export default rootReducer

