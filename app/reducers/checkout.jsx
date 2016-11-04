import { fetchAllProducts } from '../action-creators/products'

const initialState = [ //playment/shipping orderDetails object
          {
            first_name: 'Snack Package',
            description: 'this box is full of delicious snacks and funny movies',
            inventory_quantity: 1,
            price: 11
          }
  ]

const checkoutReducer = function(state = initialState, action) {
  switch(action.type) {
    case 'PLACE_ORDER' :
      return action.orderDetails
    default: return state
  }
};

export default checkoutReducer