'use strict';



//synchronous
const getAllProductsAction = (products) => ({
	type: 'GET_ALL_PRODUCTS',
	products: products
});


//asychronous
export const fetchAllProducts = () => 
  dispatch => 
    fetch(`/api/products/`)
      .then(res => res.json())
      .then(products => dispatch(getAllProductsAction(products)));
  