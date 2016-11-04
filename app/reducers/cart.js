import { fetchAllProducts } from '../action-creators/products'

const initialState = [ //orderProduct array
          {
            name: 'Snack Package',
            description: 'this box is full of delicious snacks and funny movies',
            inventory_quantity: 1,
            price: 11
          },
          {
            name: 'Puzzle box',
            description: 'this box is full of puzzles of various challenge levels',
            inventory_quantity: 1,
            price: 12
          },
          {
            name: 'Coloring box',
            description: 'you will delight in the whimsical pictures you can create',
            inventory_quantity: 1,
            price: 13
          }    
  ]

const cartReducer = function(state = initialState, action) {
  switch(action.type) {
    case 'GET_ORDER_DETAILS' :
      console.log("HIT THE cartReducer orderDetails", action.orderDetails)
      return action.orderDetails
    default: return state
  }
};

export default cartReducer