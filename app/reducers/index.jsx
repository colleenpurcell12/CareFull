import { combineReducers } from 'redux'
import productsReducer from './products'
import productReducer from './product'



export default const rootReducer = combineReducers({
	productReducer,
	productsReducer
})

