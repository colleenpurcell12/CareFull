// All reviews must belong to a product
// All reviews must belong to a user
// All reviews must be at least X characters
'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Review = db.define('reviews', {
  subject: {
    type: Sequelize.STRING,
    allowNull: false
  },
  body: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      len: {
        args: 3,
        msg: "Body must be atleast 3 characters in length"
      }
    }
  },
  rating: { //5 star rating
    type: Sequelize.INTEGER,
    validate: {max: 5}
  }
})


module.exports = Review