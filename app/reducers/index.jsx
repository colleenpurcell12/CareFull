import { combineReducers } from 'redux'
import productsReducer from './products'
import productReducer from './product'



const rootReducer = combineReducers({
	currentProduct: productReducer,
	products: productsReducer
})

export default rootReducer

