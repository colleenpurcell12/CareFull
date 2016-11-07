import React, { Component } from 'react';
import OrderDetail from './OrderDetail';
import axios from 'axios'

export default class Order extends Component {
    constructor(props) {
        super(props)
        this.state = {
            order: []
        };
        this.renderOrderDetail.bind(this);
    }
    componentDidMount () {
        // dispatches a fetch for order history
        this.props.onLoadOrderHistory();
	}

    renderOrderDetail (id) {
        // e.preventDefault();
        console.log('id is: ', id)
        axios.get('/api/orders/'+id)
        .then(order => {
            this.setState({order: order.data})
            console.log('order from backend', order.data)
        })
        console.log('the state is now', this.state)
    }

    render() {  

    const selectedOrder = this.state.order;
    let selectedOrderView = null;
    if(selectedOrder.length) {
        selectedOrderView = <OrderDetail order={this.state.order}/>
    }

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
    					<th>Details</th>
	    			</tr>
	    		</thead>

	    		<tbody>
        {/* order number, date, total, link to orderdetails*/}
        {this.props.orderHistory && this.props.orderHistory.map(order=>
        	<tr key={order.id} >
        		<td>{order.id}</td>
        		<td>{order.status}</td>
        		<td>{order.updated_at.substring(5,7)}/{order.updated_at.substring(8,10)}/{order.updated_at.substring(0,4)}</td>
        		<td>
                    <button onClick={() => this.renderOrderDetail(`${order.id}`)}>See More...</button>
                </td>
        	</tr>
        )}
        	</tbody>
	    	</table>

        {selectedOrderView}

      </div>
    )}
}

