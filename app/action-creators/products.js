'use strict';

import { RECEIVE_ALBUMS, RECEIVE_ALBUM } from '../constants';


//synchronous
const getAllProductsAction = (products) => ({
	type: 'GET_ALL_PRODUCTS',
	products: products
});


//asychronous
export const fetchAllProducts = (productId) => {
  dispatch => 
    fetch(`/api/products/${productId}`)
      .then(res => res.json())
      .then(album => dispatch(getAllProductsAction(products)));
  }