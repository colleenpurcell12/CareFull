import fetchOneProduct from '../action-creators/product'

const initialState =  //currentProduct
          {
            name: 'Snack Package',
            description: 'this box is full of delicious snacks and funny movies',
            inventory_quantity: 1,
            price: 11
          }
    


const productReducer = function(state = initialState, action) {
  //console.log("ACTION GET ONE",action)
  switch(action.type) {

  	case 'GET_ONE_PRODUCT' :
    return action.currentProduct //state is currentProduct but it's replaced not appended to products list
    
    default: return state
  }
};

export default productReducer