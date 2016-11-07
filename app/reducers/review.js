

const initialState =  []//reviews
          // [{
          //   subject: 'Delicious',
          //   body: 'Enjoyed a lot',
          //   //user_id: COME BACK TO THIS
          // }]

const reviewReducer = function(state = initialState, action) {
  //console.log("ACTION IS type of:", action.type)
  switch(action.type) {
  	case 'GET_ALL_REVIEWS' :
      return action.reviews
    case 'POST_NEW_REVIEW' :
      //console.log("ABOUT TO POST NEW REview action:", action)
      //Object.assing({}, state, )
      return [...state, action.newReview ] //.push(
      //NEED TO SEND AUTHOR LATER, like global user
    default: return state
  }
};

export default reviewReducer
