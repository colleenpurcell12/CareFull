import { fetchAllProducts } from '../action-creators/products'

// const initialState = [ //orderProduct array
//           {
//             name: 'Snack Package',
//             description: 'this box is full of delicious snacks and funny movies',
//             inventory_quantity: 1,
//             price: 11
//           },
//           {
//             name: 'Puzzle box',
//             description: 'this box is full of puzzles of various challenge levels',
//             inventory_quantity: 1,
//             price: 12
//           },
//           {
//             name: 'Coloring box',
//             description: 'you will delight in the whimsical pictures you can create',
//             inventory_quantity: 1,
//             price: 13
//           }    
//   ]

const cartReducer = function(state = [], action) {
  switch(action.type) {
    case 'GET_ORDER_DETAILS' :
      return action.orderDetails
    case 'ADD_ITEM_TO_CART':
      return state.concat(action.orderDetails)
    case 'REMOVE_ITEM_FROM_CART':
      return state.filter(item => item.product_id !== action.productId)
    case "UPDATE_QUANTITY_IN_CART":
      return state.map(item => (action.updatedProduct.product_id === item.product_id? action.updatedProduct : item ))
    default: return state
  }
};

export default cartReducer

