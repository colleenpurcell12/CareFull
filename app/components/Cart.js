import React, { Component } from 'react';
import {Link} from 'react-router';


export default class Cart extends Component {

	componentDidMount () {
		//console.log("DID MOUNTthis.props",this.props)

	    this.props.onLoadOrderDetails(); 
	    //take products from back end dispatch method in container, which employs the async action creator fetch, 
	    //puts it on the state and this makes it a prop
	    this.handleKeyPress = this.handleKeyPress.bind(this)
	  }

	handleKeyPress(e, item) {
		if(e.charCode === 13) {
			this.props.updatingItemFromCart(item, e.target.value) //quantity is e.target.value
		}
	}

	render() {
	//console.log("this.props.orderDetails ",this.props.orderDetails )    
	return (
	  <div className='row'>

	    <h2>Items in Your Cart</h2>
	    <hr/>
	    <table className='table table-hover table-responsive'> 
	    	<thead>
	    	<tr>
	    		<th>Item</th>
	    		<th>Name</th>
    			<th>Price</th>
    			<th>Quantity</th>
    			<th>Update #</th>
    			<th>Remove?</th>
	    	</tr>
	    	</thead>
	    	<tbody>
	    {
	      this.props.orderDetails.length && this.props.orderDetails.map( (item, idx) =>
	        <tr key={idx}> {/*key={item.id}*/}
	        	<td>{idx+1}</td>
	          <td>{item.name}</td> 
	          <td>${item.price}</td>

	          <td>{item.quantity}</td>

	          <td><input onKeyPress={(e) => this.handleKeyPress(e,item)}
	          	size="3"
	          	type='text' 
	          	placeholder={item.quantity}
	          	name="quantity">

	          </input></td>
	        
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
	    		<td></td>
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