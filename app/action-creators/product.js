'use strict';


//synchronous
const getOneProductAction = (currentProduct) => ({
	type: 'GET_ONE_PRODUCT',
	currentProduct: currentProduct
});


//asychronous
export const fetchOneProduct = (currentProduct) => {
  dispatch => 
    fetch(`/api/products/${currentProduct.id}`) 
    //get one route in server/product.js
      .then(res => res.json())
      .then(theProduct => dispatch(getOneProductAction(theProduct)));
  }