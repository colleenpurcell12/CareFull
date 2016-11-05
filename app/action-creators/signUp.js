'use strict'

export const postNewUser = (user) => {
	console.log('now posting new user with user: ', user)
	return dispatch =>
		axios.post('/api/users/', user)
		// .then(user => {
		// 	console.log('postNewUser got user')
		// 	res.send(user)
		// })
}