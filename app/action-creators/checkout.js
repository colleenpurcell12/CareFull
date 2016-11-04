
// const placeOrderAction = (payment_shipping_details) => ({ 
// 	//where is it on the state? 
//   type: 'PLACE_ORDER',
//   orderDetails 
// });

const placeOrder = (orderDetails) => {
  return dispatch => 
     axios.put('/api/placeOrder', //UNSURE
     orderDetails     //setting the req.body to be used to update the order 
     ) 
     //SEND SOMETHING TO INDICATE SUCESS?
    
     //GO TO ORDER CONFIRM PAGE?

    //  .then(function(updatedOrder){ //UNSURE WHETHER RETURNS
      //returns an order when all the additional 
      // .then(function(payment_shipping_details){
        //console.log("HERE IN fetchReview ABOUT TO PLACE ORDER", payment_shipping_details)
    //    dispatch(placeOrderAction(updatedOrder))
    //   }); 
  }

  export default placeOrder