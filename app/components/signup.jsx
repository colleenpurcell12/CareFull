import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';


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
				<input type='submit' value='Sign Up'/>
				</form>
			</div>
		)
	}
}

export default connect(
	null, 
	(dispatch) => ({
		newSignUp: (user) => {
			axios.post('/api/users/', user)
		}
	})
	)(Signup);