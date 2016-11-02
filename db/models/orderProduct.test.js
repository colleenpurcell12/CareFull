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
    let orderProduct;
    beforeEach('test order', () => {
      product = Product.create({
        name: 'Product1',
        description: 'A thing',
        price: 12.00
      });
      order = Order.create({
        status: 'pending'
      });
      // Promise.all([product, order])
      // .then(function(results){
      //   orderProduct = OrderProduct.create({
      //     product_id: 1,
      //     order_id: 1,
      //     quantity: 100
      //   })
      // })
    })

    it("has a price based on product price", () => {
      console.log("ORDER PRODUCT", orderProduct)
      expect(orderProduct.price).to.equal(product.price);
    })

    // it("when the order is pending, price should update when product price changes", () => {
    //   product.update({price: 25}).then(function(changedProduct) {
    //     expect(orderProduct.price).to.equal(changedProduct.price);
    //
    //   })
    // })
    //
    // it("when the order is completed, price no longer updates", () => {
    //
    // })


    })
})
