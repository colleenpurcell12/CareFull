// Orders must belong to a user OR guest session (auth vs unauth)
// Orders must contain line items that capture the price, current product ID and quantity
// Price of completed order should be frozen and not change
// Field in Order Model is boolean isCompleted which then goes into order history

'use strict'

// const bcrypt = require('bcrypt')
const Sequelize = require('sequelize')
const db = require('APP/db')
const Product = require('APP/db/models/product')
// const OrderProduct = require('./orderProduct')

//item in order
const Order = db.define('orders', {
	status: { //returned, shipped, order, or in cart
	    type: Sequelize.ENUM('pending', 'completed'),
		defaultValue: 'pending'
	}
	//TODO Add Auth Session
})

Order.getCart = function(userId) {
	return Order.findOrCreate({
		where: {
			status: 'pending',
			user_id: userId.id
		}
	})
	// .then(function(foundOrder) {
	// 	if(!foundOrder) return Order.create({user_id: userId})
	// 	else return foundOrder
	// })
}

//Order.belongsTo(Session);


module.exports = Order


