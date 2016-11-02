'use strict'

const db = require('APP/db')
const Order = require('./order')
const {expect} = require('chai')

describe('Order', () => {
  before('wait for the db', () => db.didSync)

  describe('definition', () => {

    it('has expected status definition', () => {
      expect(Order.attributes.status).to.be.an('object');
    })

  })

  describe('validations', () => {
    let order;
    beforeEach('test order', () => {
      order = Order.build();
    })

    it("does not create with an invalid status type", () => {
      let order2 = Order.build({status: 'not a valid status'})
      expect(order2.id).to.not.exist
    })

    it("has valid status type", () => {
      expect(order.status).to.be.equal('pending')
    })


  })
})
