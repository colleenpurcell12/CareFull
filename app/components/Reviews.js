'use strict';

import React, { Component } from 'react';
import { createNewReview } from '../action-creators/review'
import {connect} from 'react-redux'
import store from '../store'

//export default ({ products }) => (
class Reviews extends Component {

  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {}
  }

  handleSubmit(event) {
    event.preventDefault();
    const review = {
      subject: event.target.subject.value,
      body: event.target.body.value,
      rating: 5,
      //REVIEW is this best practice?
      author_id: store.getState().auth.id,
      product_id: this.props.productId,
    }
    this.props.createNewReview(review)
    this.state = review
    console.log('~~~~~THE STATE~~~~', this.state)
  }

  render() {
    console.log("this.props.reviews ",this.props.reviews )  //array
    return (
      <div>
        <h4>Product Reviews</h4>
        {/* //image, caption, price, button add to cart */}
        <ul> {
          this.props.reviews && this.props.reviews.map( (review, idx) =>
            <li key={idx}>
              {review.author.name} says "{review.subject}: {review.body}"
            </li>
          )
        } </ul>
        <h5>Write a Review</h5>
         <div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Subject" name="subject" />
            <input type="text" placeholder="your review here" name="body" />
            <button>Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

const MapDispatch = { createNewReview }

export default connect(null, MapDispatch)(Reviews) //container equivalent
