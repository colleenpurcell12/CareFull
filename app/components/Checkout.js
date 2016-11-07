import React, {Component} from 'react';
import placeOrder from '../action-creators/checkout'


export default class Checkout extends Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault();
    const checkoutData = {
      first_name: event.target.first_name.value,
      last_name: event.target.last_name.value,
      address1: event.target.address1.value,
      address2: event.target.address2.value,
      city: event.target.city.value,
      state: event.target.state.value,
      zipcode: event.target.zipcode.value,
      cc_type: event.target.cc_type.value,
      creditcard_number: event.target.creditcard_number.value
    }
    //probably goes into the order model table
    placeOrder(checkoutData) //orderDetails


    //GO TO ORDER CONFIRM PAGE??
  }

  render() {
    return (
      <div>
         <h2>Checkout</h2>
         <hr />
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <input name="first_name" placeholder="First Name"/>
            <input name="last_name" placeholder="Last Name"/>
          </div>
          <div className='form-group'>
            <input name="address1" placeholder="100 Street Lane"/>
          </div>
          <div className='form-group'>
            <input name="address2" placeholder="Apt #1"/>
          </div>
          <div className='form-group'>
            <input name="city" placeholder="Townville"/>
            <input name="state" placeholder="NY"/>
            <input name="zipcode" placeholder="12345"/>
          </div>
          <div className='form-group'>
            <select name='cc_type' className="custom-select">
              <option>Credit Card Type</option>
              <option value="visa">Visa</option>
              <option value="mastercard">MasterCard</option>
              <option value="discover">Discover</option>
            </select>          
            &nbsp;
          <input name="creditcard_number" placeholder="Credit Card #"/>
          </div>

          {/* payment details*/}
          <input type="submit" value="Place Order" />
        </form>
      </div>
    )
  }
}