import React, {Component} from 'react';
import { connect } from 'react-redux';
import { postNewUser } from '../action-creators/signUp'

class Signup extends Component {
	constructor() {
		super()
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleSubmit(event) {
		event.preventDefault();
		const user = {
			name: event.target.name.value,
			email: event.target.email.value,
			password: event.target.password.value
		}
		this.props.newSignUp(user);
	}

	render() {
		return (
			<div>
				<h2>Sign Up</h2>
				<form onSubmit={this.handleSubmit}>
				<input type="text" placeholder="Name" name="name" />
				<input type="text" placeholder="Email" name="email" />
				<input type="text" placeholder="Password" name="password" />
				<button>Sign up</button>
				</form>
			</div>
		)
	}
}

export default connect(
	null, 
	(dispatch) => ({
		newSignUp: payload => postNewUser(payload)
	})
	)(Signup);