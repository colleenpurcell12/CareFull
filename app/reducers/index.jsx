import { combineReducers } from 'redux'
import products from './products'
import product from './product'



const rootReducer = combineReducers({
	product,
	products
})

export default rootReducer

