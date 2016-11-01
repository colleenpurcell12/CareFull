import React, {Component} from 'react';

export default class Signup extends Component {
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
		console.log(user)
	}

	render() {
		return (
			<div>
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