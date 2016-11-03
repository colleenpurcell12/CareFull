'use strict';


//synchronous
const getOneProductAction = (currentProduct) => ({
	type: 'GET_ONE_PRODUCT',
	currentProduct
});


//asychronous
const fetchOneProduct = (currentProductId) => {
	//console.log("HERE IN fetchOneProduct ABOUT TO START ", )
  return dispatch => 
    fetch(`/api/products/${currentProductId}`) 
    //get one route in server/product.js
   		.then(res => res.json())
    	.then(function(theProduct){
        //console.log("HERE IN the dispatch promise about to getOneProductAction")
        dispatch(getOneProductAction(theProduct))
       }); 
      		//^ sets the state.currentProduct to theProduct query result 
  }



  export default fetchOneProduct

  // () => xyc           GOOD
  // () => return xyc    BAD
  // () => {return xyc}  GOOD
