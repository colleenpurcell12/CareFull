'use strict'

const db = require('APP/db')
const User = require('APP/db/models/user')
const loginRouter = module.exports = require('express').Router()

loginRouter.get('/login', (req, res, next) => {
	// req.body is form with name and password information
	User.findOne(req.body)
	.then(user => {
		req.session.userId = user.id;
	})
	.catch(next)
})

loginRouter.get('/logout', (req, res, next) => {
	req.session = null;
	// destroys session...should we only remove userId?
})

// loginRouter.use('/login',(req, res, next) => {
//   res.status(500).send(err)
// })
