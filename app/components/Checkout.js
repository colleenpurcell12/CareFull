import React, {Component} from 'react';
import  placeOrder from '../action-creators/checkout'


export default class Checkout extends Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault();
    const checkout = {
      first_name: event.target.first_name.value,
      last_name: event.target.last_name.value,
      adress1: event.target.address1.value,
      adress2: event.target.address2.value,
      city: event.target.city.value,
      state: event.target.state.value,
      zipcode: event.target.zipcode.value,
      creditcard_number: event.target.creditcard_number.value
    }
    //probably goes into the order model table
    console.log(checkout)
    this.props.placeOrder(checkout) //orderDetails


    //GO TO ORDER CONFIRM PAGE??
  }

  render() {
    return (
      <div>
         <h2>Checkout</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input name="first_name" placeholder="First Name"/>
            <input name="last_name" placeholder="Last Name"/>
          </div>
          <div>
            <input name="adress1" placeholder="100 Street Lane"/>
          </div>
          <div>
            <input name="adress2" placeholder="Apt #1"/>
          </div>
          <div>
            <input name="city" placeholder="Townville"/>
            <input name="state" placeholder="NY"/>
            <input name="zipcode" placeholder="12345"/>
          </div>
          <div>
          <input name="creditcard_number" placeholder="payment info here"/>
          </div>
          {/* payment details*/}
          <input type="submit" value="Place Order" />
        </form>
      </div>
    )
  }
}