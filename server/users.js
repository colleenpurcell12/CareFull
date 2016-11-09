'use strict'

const epilogue = require('./epilogue')
const db = require('APP/db')
const User = require('APP/db/models/user')

const userRouter = require('express').Router() 

//Custom routes go here.
userRouter.post('/', (req, res, next) => {
	User.findOne({
		where: {
			email: req.body.email
		}
	})
	.then(user => {
		if(!user) {
			User.create(req.body)
			.then(user=>res.send(user))
		}
		else res.send('')
	})
	.catch(next)
})

module.exports = userRouter

// Epilogue will automatically create standard RESTful routes
const users = epilogue.resource({
  model: db.model('users'),
  endpoints: ['/users', '/users/:id']
})

const {mustBeLoggedIn, selfOnly, forbidden} = epilogue.filters
users.delete.auth(mustBeLoggedIn)
users.delete.auth(selfOnly('delete'))
users.list.auth(forbidden('cannot list users'))
users.read.auth(mustBeLoggedIn)