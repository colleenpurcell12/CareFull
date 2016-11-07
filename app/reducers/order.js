
const orderHistoryReducer = function(state = [], action) {
  switch(action.type) {
    case 'GET_ORDER_HISTORY':
      return action.orders
    default: 
      return state
  }
};

export default orderHistoryReducer