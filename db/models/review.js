'use strict'

// const bcrypt = require('bcrypt')
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
  }
})

module.exports = Review