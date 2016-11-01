import { fetchAllProducts } from '../action-creators/products'

const initialState = [
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

const productsReducer = function(state = initialState, action) {
  switch(action.type) {
    case 'GET_ALL_PRODUCTS' :
      return [  ...state , ...action.products]
    default: return state
  }
};

export default productsReducer