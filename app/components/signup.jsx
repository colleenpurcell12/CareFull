import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {Link} from 'react-router';



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
		//location.assign("/products"); 
	}

	render() {
		return (
			<div className='container container-fluid'>
				<h2>Sign Up</h2>
				<hr />
				<form onSubmit={this.handleSubmit}>
				<div className='form-group'>
					<input type="text" placeholder="Name" name="name" />
				</div>
				<div className='form-group'>
					<input type="text" placeholder="Email" name="email" />
				</div>
				<div className='form-group'>
					<input type="text" placeholder="Password" name="password" />
				</div>
				<button className = 'btn btn-default' type='submit' value='Sign Up'>Sign Up</button>
				</form>
			</div>
		)
	}
}

import { login } from '../reducers/auth';

export default connect(
	null, 
	(dispatch) => ({
		newSignUp: (user) => {
			axios.post('/api/users/', user)
			.then(res => 
				dispatch(login(res.data.email, res.data.password)))
			.then(() => location.assign("/products"))
			.catch(err => console.error("Failed to login user", err))
		}
	})
	)(Signup);