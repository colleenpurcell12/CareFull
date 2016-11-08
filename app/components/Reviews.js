'use strict';

import React, { Component } from 'react';
import { createNewReview } from '../action-creators/review'
import {connect} from 'react-redux'
import store from '../store'
import StarRatingComponent from 'react-star-rating-component';


//export default ({ products }) => (
class Reviews extends Component {

  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      rating: 1
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("THE STATE OF THE STATE ON SUBMIT", store.getState())
    const review = {
      subject: event.target.subject.value,
      body: event.target.body.value,
      rating: event.target.rating.value,
      //REVIEW is this best practice?
      author_id: store.getState().auth.id,
      product_id: this.props.productId,
    }
    this.props.createNewReview(review)
  }

  onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
    }

  render() {
    let totalStars = 0, totalReviews = 0;
    //setting const to the WriteReview component created at bottom of this file
    let loggedInReviewView = store.getState().auth ? <WriteReview /> : null

    return (
      <div>
        <h4>Product Reviews</h4>
        <ul> {
          this.props.reviews && this.props.reviews.map( (review, idx) => {
            totalStars+=review.rating; totalReviews++;
            return (
              <li key={idx}>
              {review.author.name} says "{review.subject}: {review.body}"
              <StarRatingComponent
                name="ratings"
                starCount={5}
                editing={false}
                value={review.rating}
              />
              </li>
            )
          })}
        </ul>

        <span title={totalStars/totalReviews + " out of 5 stars"} className="star-rating">
          
          <StarRatingComponent
            name="average"
            starCount={5}
            editing={false}
            value={totalStars/totalReviews}
          />

        </span>

        <small>{totalReviews} customer {totalReviews === 1 ? 'review' : 'reviews'}</small>

        {loggedInReviewView}

      </div>
    )
  }
}

class WriteReview extends Component {
  render () {
    return (
    <div>
    <h4>Write a Review</h4>

        <form onSubmit={this.handleSubmit}>
          <p>
            <input type="text" placeholder="Subject" name="subject" />
          </p>
          <p>
            <textarea placeholder="your review here" name="body" />
          </p>
          <div className="star-rating">
            <StarRatingComponent
              name="rating"
              value={this.state.rating}
              onStarClick={this.onStarClick.bind(this)}
            />
          </div>
          <button className= 'btn btn-default'>Submit</button>
        </form>

      </div>
    )
  }
}

const MapDispatch = { createNewReview }

export default connect(null, MapDispatch)(Reviews) //container equivalent
