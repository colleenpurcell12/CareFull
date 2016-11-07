'use strict'

import axios from 'axios'

const loadOrderHistory = (orders) => ({
	type: 'GET_ORDER_HISTORY',
	orders: orders
});

export const fetchOrderHistory = () =>  
	dispatch => 
    axios.get(`/api/orders/`)
    .then(orders => dispatch(loadOrderHistory(orders.data)))
  



  