import React, { Component } from 'react';
import {Link} from 'react-router';


export default class Cart extends Component {
	componentDidMount() {
	    this.props.onLoadOrderDetails(); 
	    //take products from back end dispatch method in container, which employs the async action creator fetch, 
	    //puts it on the state and this makes it a prop
	  }

	render() {
	//console.log("this.props.orderDetails ",this.props.orderDetails )    
	return (
	  <div>
	    <h2>Items in Your Cart</h2>

	    <ul> {
	      this.props.orderDetails && this.props.orderDetails.map( (item, idx) =>
	        <li key={idx}> {/*key={item.id}*/}
	          {item.name}
	        </li>
	      )
	    } </ul>

	    <Link to="/checkout" activeClassName="active">Checkout</Link>

	  </div>
	)
	}
}