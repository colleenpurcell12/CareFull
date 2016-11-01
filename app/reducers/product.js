import fetchOneProduct from '../action-creators/product'

const initialState = {currentProduct: 
          {
            name: 'Snack Package',
            description: 'this box is full of delicious snacks and funny movies',
            inventory_quantity: 1,
            price: 11
          }
    }


const productReducer = function(state = initialState, action) {
  switch(action.type) {
  	case 'GET_ONE_PRODUCT' :
  	const { product } = state
	    return Object.assign( {}, state, 
	    	{ currentProduct: currentProduct }
	    	)
    default: return state
  }
};

export default productReducer