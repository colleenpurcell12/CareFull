'use strict';

import React, { Component } from 'react';
import { createNewReview } from '../action-creators/review'
import {connect} from 'react-redux'

//export default ({ products }) => (  
class Reviews extends Component {

  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault();
    const review = {
      subject: event.target.subject.value,
      body: event.target.body.value,
      rating: 5,
      author_id: 1,
      product_id: this.props.productId,
    }
    //console.log("ABOUT TO call action creator with review:", review)
    this.props.createNewReview(review)
  }
  // componentDidMount() {
  //   console.log("IN PRODUCT COMPONENT ABOUT TO mount ")
  //   //this.props.onLoadSingleProduct(); //passes the currentProduct to the props
  // }
  render() { 
    console.log("this.props.reviews ",this.props.reviews )  //array  
    return (
      <div>
        <h4>Product Reviews</h4>
        {/* //image, caption, price, button add to cart */}
        <ul> {
          this.props.reviews && this.props.reviews.map( (review, idx) =>
            <li key={idx}> 
              {review.author.name} says "{review.subject}: {review.body}""
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