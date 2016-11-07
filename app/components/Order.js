import React, { Component } from 'react';

export default class Order extends Component {
	componentDidMount () {
		// dispatches a fetch for order history
		this.props.onLoadOrderHistory();
  	console.log ('order history from props', this.props.orderHistory)
	}
  render() {    
    return (
      <div className='row'>
        <h2>Order History</h2>
        <hr/>
        <table className='table table-hover table-responsive'> 

	    		<thead>
	    			<tr>
    					<th>Order #</th>
    					<th>Status</th>
    					<th>Date</th>
    					<th>Ordered by</th>
	    			</tr>
	    		</thead>

	    		<tbody>
        {/* order number, date, total, link to orderdetails*/}
        {this.props.orderHistory && this.props.orderHistory.map(order=>
        	<tr key={order.id}>
        		<td>{order.id}</td>
        		<td>{order.status}</td>
        		<td>{order.updated_at.slice(0,10)}</td>
        	{/*unregistered user appears for testing, but only logged in user should ever appear here*/}
        		<td>{ order.first_name || 'unregistered user'}</td>
        	</tr>
        )}
        	</tbody>
	    	</table>
      </div>
    )
  }
}

