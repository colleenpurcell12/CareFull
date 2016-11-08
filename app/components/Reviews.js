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
      rating: 0
    };
  }

  handleSubmit(event) {
    event.preventDefault();
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

    return (
      <div>
        <h4>Product Reviews</h4>

        <ul className='list-unstyled'> 
        {
          this.props.reviews && this.props.reviews.map( (review, idx) => {

            totalStars+=review.rating; totalReviews++;

            return (
              <li key={idx} className='review-body'>
                <p id='review-stars'>
                  <StarRatingComponent
                    name="ratings"
                    starCount={5}
                    editing={false}
                    value={review.rating}
                  />
                </p>
                <h4>
                  {review.author.name}'s Review
                </h4>
                <b className='review-subject'>
                  {review.subject}
                </b>
          
                <p>{review.body}</p>

              </li>
              )
          })
        }
        </ul>

        <span title={totalStars/totalReviews + " out of 5 stars"} className="star-rating">
          
          <StarRatingComponent
            name="average"
            starCount={5}
            editing={false}
            value={totalStars/totalReviews}
          />

        </span>

        <span> {totalReviews} customer {totalReviews === 1 ? 'review' : 'reviews'}</span>

        {store.getState().auth ?
        <div>
          <h4>Write a Review</h4>
            <form onSubmit={this.handleSubmit}>
              <p>
                <input type="text" placeholder="Subject" name="subject" />
              </p>
              <p>
                <textarea placeholder="your review here" name="body" />
              </p>
              <p className="star-rating">
                <StarRatingComponent
                  name="rating"
                  value={this.state.rating}
                  onStarClick={this.onStarClick.bind(this)}
                />
              </p>
              <button className= 'btn btn-default'>Submit</button>
            </form>
        </div> : null
        }

      </div>
    )
  }
}


const MapDispatch = { createNewReview }

export default connect(null, MapDispatch)(Reviews) //container equivalent
