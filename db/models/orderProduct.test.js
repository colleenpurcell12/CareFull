'use strict'

const db = require('APP/db')
const OrderProduct = require('./orderProduct')
const Product = require('./product')
const Order = require('./order')
const {expect} = require('chai')

describe('OrderProduct', () => {
  before('wait for the db', () => db.didSync)

  describe('definition', () => {

    it('has expected price definition', () => {
      expect(OrderProduct.attributes.price).to.be.an('object');
    })

    it('has expected quantity definition', () => {
      expect(OrderProduct.attributes.quantity).to.be.an('object');
    })

  })

  describe('validations', () => {
    let product;
    let order;
    beforeEach('test order', () => {
      product = Product.build({
        name: 'Product1',
        description: 'A thing',
        price: 12.00
      });
      order = Order.build({
        status: 'pending'
      });
    })

    it("has a price based on product price", () => {
      let order2 = Order.build({status: 'not a valid status'})
      expect(order2.id).to.not.exist
    })

    it("has valid status type", () => {
      expect(order.status).to.be.equal('pending')
    })


  })
})
