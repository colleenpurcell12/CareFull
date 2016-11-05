import React, { Component } from 'react'

export class WhoAmI extends Component {
	componentDidMount() {
		this.props.fetchOrderDetails()
	}

	render() {
		return (
			  <li className="whoami">
			  <a href="#">
			    Signed in as {this.props.user && this.props.user.name} 	&nbsp;
			  	<button className="btn btn-default navbar-btn logout-button" onClick={this.props.logout}>Logout</button>
			  </a>
			  </li>
		)
	}

}






import {logout} from 'APP/app/reducers/auth'
import { fetchOrderDetails } from 'APP/app/action-creators/cart'
import {connect} from 'react-redux'

export default connect (
  ({ auth }) => ({ user: auth }),
  {logout, fetchOrderDetails},
) (WhoAmI)