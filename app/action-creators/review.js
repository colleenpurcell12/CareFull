'use strict';
import axios from 'axios'

const getAllReviewsAction = (reviews) => ({
  type: 'GET_ALL_REVIEWS',
  reviews
});

  const fetchReviews = (currentProductId) => {
  //console.log("HERE IN fetchReview ABOUT TO START ", )
  return dispatch =>
    fetch(`/api/reviews/${currentProductId}`)
    //get one route in server/product.js
      .then(res => res.json())
      .then(function(AllReviews){
        dispatch(getAllReviewsAction(AllReviews))
       });
          //^ sets the state.currentProduct to theProduct query result
  }

const postNewReviewAction = (newReview) => ({
  type: 'POST_NEW_REVIEW',
  newReview
  //not same name as state, about to be appended to reviews array
});

export const createNewReview = (review) => {
  //console.log("HERE IN fetchReview ABOUT TO START ", )
  return dispatch => {
    axios.post('/api/reviews', review)
    .then(function(result) {
      dispatch(postNewReviewAction(result.data))
      console.log("RESULT", result)
    })
  }
}

  export default fetchReviews
