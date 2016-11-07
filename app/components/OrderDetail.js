import React, { Component } from 'react'
import {connect} from 'react-redux'

export default class OrderDetail extends Component {
	render() {
		return (
			<div>
		{/* Order.js passes its order state to this component. the state contains an array of items in the order all with the same order_id*/}
			<h4>Order Details for Order #{this.props.order[0].order_id}</h4>
			<table className='table'>
				<thead>
				<tr>
					<th>Item #</th>
					<th>Item</th>
					<th>Price</th>
					<th>Quantity</th>
				</tr>
				</thead>
				<tbody className='table-striped table-bordered'>
					{this.props.order && this.props.order.map((item, idx) => (
						<tr key={idx}>
							<td>{idx+1}</td>
							<td>{item.name}</td>
							<td>{item.price}</td>
							<td>{item.quantity}</td>	
						</tr>
						)
					)}
				</tbody>
			</table>
			</div>
		)
	}
}