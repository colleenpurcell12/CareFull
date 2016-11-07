

const initialState =  []

const reviewReducer = function(state = initialState, action) {
  switch(action.type) {
  	case 'GET_ALL_REVIEWS' :
      return action.reviews
    case 'POST_NEW_REVIEW' :
      //REVIEW Why can I do this, not Object.assign etc.
      return [...state, action.newReview ]
    default: return state
  }
};

export default reviewReducer
