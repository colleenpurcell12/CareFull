'use strict'

const newSignUpAction = (user) => ({
	type: 'CREATE_NEW_USER',
	user
})

const postNewUser = (user) => (
	dispatch =>
		fetch('/api/users', {
			method: "POST",
			body: JSON.stringify(user),
			headers: {
				'Content-type': "application/json; charset=UTF-8"
			}
		}
	)
		.then(user)
)