import { fetchAllProducts } from '../action-creators/products'

const productsReducer = function(state = [], action) {
  switch(action.type) {
    case 'GET_ALL_PRODUCTS' :
      return action.products
    default: return state
  }
};

export default productsReducer