import React, { Component } from 'react';

export default class Order extends Component {
	componentDidMount () {
		// dispatches a fetch for order history
		this.props.onLoadOrderHistory();
	}
  render() {    
    return (
      <div>
        <h2>Order History</h2>
        {/* order number, date, total, link to orderdetails*/}
        
      </div>
    )
  }
}

