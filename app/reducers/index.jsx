import { combineReducers } from 'redux'
import productsReducer from './products'
import productReducer from './product'
import reviewReducer from './review'



const rootReducer = combineReducers({
	auth: require('./auth').default,  
	currentProduct: productReducer,
	products: productsReducer,
	reviews: reviewReducer
})

export default rootReducer

