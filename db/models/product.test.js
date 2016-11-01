'use strict'

const db = require('APP/db')
const Product = require('./product')
const {expect} = require('chai')

describe('Product', () => {
  before('wait for the db', () => db.didSync)

  describe('definition', () => {

    it('has expected name definition', () => {
      expect(Product.attributes.name).to.be.an('object');
    })

  })

  describe('validations', () => {
    let product;
    beforeEach('test product', () => {
      product = Product.build();
    })

    it("has a required name", () => {
      return product.validate()
        .then(err => {
          expect(err).to.be.an('object');
          expect(err.errors[0]).to.contain({
            path: 'name',
            type: 'notNull Violation'
          })
        })
    })    
    it("has a default inventory quantity", () => {
      expect(product.inventory_quantity).to.be.equal(0);
    })        
    it("has a default photo url", () => {
      expect(product.photo).to.be.equal('/default.svg');
    })

  })
  
    // it('has properties', () =>
    //   Product.create({
    //     name: ,
    //     description: ,
    //     price: ,
    //     inventory_quantity: ,
    //     category:
    //   }).then(product =>
    //     expect(product).to.contain({

    //     })  
    //   )
    // )



})