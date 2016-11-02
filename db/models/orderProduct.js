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
const OrderProduct = db.define('OrderProduct', {
		//order product quantity, productId, price

	price: {
	    type: Sequelize.FLOAT,
	    allowNull: false
	},
	quantity: {
		type: Sequelize.INTEGER,
		defaultValue: 0
	},
	// {
	// 	hook: {
	// 	    beforeUpdate: function() {
	// 			if(!this.isCompleted){ //not sold yet, could "go on sale"
	// 		    	Product.findById(productId)
	// 		    	.then(product =>
	// 		    		this.price= product.price
	// 		    	)
	// 	         }
	// 	    }
 //  		}
	// }
})


module.exports = OrderProduct
