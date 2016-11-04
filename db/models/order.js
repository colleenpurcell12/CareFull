// Orders must belong to a user OR guest session (auth vs unauth)
// Orders must contain line items that capture the price, current product ID and quantity
// Price of completed order should be frozen and not change
// Field in Order Model is boolean isCompleted which then goes into order history

'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Order = db.define('orders', {
	status: { //returned, shipped, order, or in cart
	    type: Sequelize.ENUM('pending', 'completed'),
		defaultValue: 'pending'
	}
})

module.exports = Order


