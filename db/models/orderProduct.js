// Orders must belong to a user OR guest session (auth vs unauth)
// Orders must contain line items that capture the price, current product ID and quantity
// Price of completed order should be frozen and not change
// Field in Order Model is boolean isCompleted which then goes into order history

'use strict'

// const bcrypt = require('bcrypt')
const Sequelize = require('sequelize')
const db = require('APP/db')
const Product = require('APP/db/models/product')
const Order = require('APP/db/models/order')

//item in order
const OrderProduct = db.define('order_product', {
		//order product quantity, productId, price

	price: {
	    type: Sequelize.FLOAT,
	},
	quantity: {
		type: Sequelize.INTEGER,
		defaultValue: 0
	},
}, {
		// hook: {
		//     beforeCreate: function() {
		// 			Product.findOne( {where: {id: this.product_id}})
		// 			.then( function(foundProduct) {
		// 				this.price = foundProduct.price
		// 			})
		//     }
  	// 	}
})

module.exports = OrderProduct
