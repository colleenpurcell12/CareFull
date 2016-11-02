'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user')
const Product = require('./product')
const Review = require('./review')
const Order = require('./order.js')
const OrderProducts = require('./orderProduct.js')

	//associations with the Product model
	Product.hasMany(Review)
	User.hasMany(Review)
	User.hasMany(Order)
	Product.belongsToMany(Order, {through: OrderProducts})
	Order.belongsToMany(Product, {through: OrderProducts})

module.exports = { User, Product, Review }
