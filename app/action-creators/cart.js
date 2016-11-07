'use strict';
import axios from 'axios';

//synchronous
const getOrderDetailsAction = (orderDetails) => ({
	type: 'GET_ORDER_DETAILS',
	orderDetails: orderDetails
});

//asychronous
export const fetchOrderDetails = () => 
  dispatch => 
    axios.get('api/cart') 
      .then(res => {
      	console.log("IN THE fetchOrderDetails, res is *hopefuly not empty array+++++++++++++++", res)
      	dispatch(getOrderDetailsAction(res.data))
      })
  
//for adding item to cart in all products page 
const addItem = orderDetails => ({ type: 'ADD_ITEM_TO_CART', orderDetails })

export const addItemToCart = product => dispatch => {
    axios.post('/api/cart', product)
         .then(res => dispatch(addItem(res.data)))
         .catch(err => console.error(`Adding item: ${product} unsuccesful`, err))
}

const removeItem = productId => ({ type: 'REMOVE_ITEM_FROM_CART', productId})

export const removeItemFromCart = productId => dispatch => {
  dispatch(removeItem(productId))
  axios.delete(`/api/cart/${productId}`)
    .catch(err => console.error(`Adding item: ${product} unsuccesful`, err))
}

//for updating quantity in cart
const updateItem = updatedProduct => ({type: "UPDATE_QUANTITY_IN_CART", updatedProduct})

export const updateItemFromCart = (product, quantity) => dispatch => {
  axios.put(`/api/cart/${product.product_id}`, {'quantity': quantity})
    .then(res => dispatch(updateItem(res.data)))
             .catch(err => console.error(`Update quantity: ${quantity} unsuccesful`, err))

}

