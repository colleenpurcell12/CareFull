// Must have title, description, price, and inventory quantity
// Must belong to at least one category
// If there is no photo, there must be a placeholder photo used
'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')
const OrderProduct = require('./orderProduct')
const Order = require('./order')

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
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: true //may need to change to false
  },
  photo: {
    type: Sequelize.STRING,
    defaultValue: '/sample.png'
  },
}, {
  hooks: {
      afterUpdate : function(product){
        //Find all OrderProducts with the product's id
        return OrderProduct.findAll({where: {product_id: product.id}})
        .then(function(res) {
          //For each OrderProduct
          res.map(function(orderProduct) {
            //Find all orders
            return Order.findAll({where: {id: orderProduct.order_id}})
            .then(function(orders) {
              //For each order
              orders.map(function(order){
                //If the order is pending, update OrderProduct's price
                if(order.status === 'pending'){
                  return orderProduct.update({price: product.price})
                }
              })
            })
          })
        })
      }
  }
})

module.exports = Product
