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
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("THE STATE OF THE STATE ON SUBMIT", store.getState())
    const review = {
      subject: event.target.subject.value,
      body: event.target.body.value,
      rating: 5,
      //REVIEW is this best practice?
      author_id: store.getState().auth.id,
      product_id: this.props.productId,
    }
    this.props.createNewReview(review)
  }

  render() {
    console.log("THE STORE STATE ", store.getState  )  //array
    return (
      <div>
        <h4>Product Reviews</h4>
        <ul> {
          this.props.reviews && this.props.reviews.map( (review, idx) =>
            <li key={idx}>
              {review.author.name} says "{review.subject}: {review.body}"
            </li>
          )
        } </ul>
        <h4>Write a Review</h4>
         <div>
          <form onSubmit={this.handleSubmit}>
            <p><input type="text" placeholder="Subject" name="subject" /></p>
            <p>
            <textarea placeholder="your review here" name="body" /></p>
            <button className= 'btn btn-default'>Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

const MapDispatch = { createNewReview }

export default connect(null, MapDispatch)(Reviews) //container equivalent
