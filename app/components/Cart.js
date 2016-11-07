import React, { Component } from 'react';
import {Link} from 'react-router';


export default class Cart extends Component {
	componentDidMount () {
		console.log("DID MOUNTthis.props",this.props)
	    this.props.onLoadOrderDetails(); 
	    //take products from back end dispatch method in container, which employs the async action creator fetch, 
	    //puts it on the state and this makes it a prop
	  }

	render() {
	console.log("this.props.orderDetails ",this.props.orderDetails )    
	return (
	  <div className='row'>

	    <h2>Items in Your Cart</h2>

	    <table className='table table-hover table-responsive'> 
	    	<thead>
	    	<tr>
	    		<th>Item</th>
	    		<th>Name</th>
    			<th>Price</th>
    			<th>Quantity</th>
    			<th>Remove?</th>
	    	</tr>
	    	</thead>
	    	<tbody>
	    {
	      this.props.orderDetails && this.props.orderDetails.map( (item, idx) =>
	        <tr key={idx}> {/*key={item.id}*/}
	        	<td>{idx+1}</td>
	          <td>{item.name}</td> 
	          <td>${item.price}</td>
	          <td>
	          	<input type='text' value=
	          	{item.quantity}>
	          	</input>
	          </td>
	          <td>
	          	<button className='btn-default btn' onClick={() => this.props.deleteItemFromCart(item.product_id)}>
	          	<span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
	 						</button>
	 					</td>
	        </tr>
	      )
	    } 
	    	<tr>
	    		<td>Total</td>
	    		<td></td>
	    		<td>totalPrice</td>
	    		<td>totalQuantity</td>
	    		<td>
	    			<Link to="/checkout" className='btn btn-success btn-lrg' activeClassName="active">Checkout</Link>
	    		</td>
	    	</tr>
	    	</tbody>
	    </table>

	  </div>
	)
	}
}