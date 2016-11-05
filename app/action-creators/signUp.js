'use strict'

export const postNewUser = (user) => (
	dispatch =>
		fetch('/api/users', {
			method: "POST",
			body: JSON.stringify(user),
			headers: {
				'Content-type': "application/json; charset=UTF-8"
			}
		}
	)
)