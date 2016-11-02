'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user')
const Product = require('./product')
const Review = require('./review')
	//associations with the Product model
	Product.hasMany(Review)
	User.hasMany(Review)
	Review.belongsTo(User, {as: 'author'}) 
	//adding this to be able to include user name on the product page
	// User.hasMany(Orders)
	// Product.belongsToMany(Order)
	// Order.belongsToMany(Product)

module.exports = { User, Product, Review }
