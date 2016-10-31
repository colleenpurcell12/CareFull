'use strict'

// const bcrypt = require('bcrypt')
const Sequelize = require('sequelize')
const db = require('APP/db')

const Product = db.define('products', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  price: {
    // Sequelize.DECIMAL(10,2) returns a string hm...
    type: Sequelize.FLOAT,
    allowNull: false
  },
  inventory_quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  category: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    allowNull: false
  },
  photo: {
    type: Sequelize.STRING,
    defaultValue: '/default.svg'
  },
})

module.exports = Product