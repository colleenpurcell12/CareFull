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
	},
	//all the new checkout order details like shipment and payment
	first_name: {
	    type: Sequelize.TEXT,
	    allowNull: true
	},
	last_name: {
	    type: Sequelize.TEXT,
	    allowNull: true
	},
	address1: {
	    type: Sequelize.TEXT,
	    allowNull: true
	},
	address2: {
	    type: Sequelize.TEXT,
	    allowNull: true
	},
	city: {
	    type: Sequelize.TEXT,
	    allowNull: true
	},
	state: {
	    type: Sequelize.TEXT,
	    allowNull: true
	    //might add a 2 character validator
	},
	zipcode: {
	    type: Sequelize.TEXT,
	    allowNull: true
	    //might add a 5 numbers only validator
	}, 
	cc_type: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	creditcard_number: {
		type: Sequelize.TEXT,
		allowNull: true
	}

})

module.exports = Order
