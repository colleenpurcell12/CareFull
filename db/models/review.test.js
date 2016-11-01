'use strict'

const db = require('APP/db')
const Review = require('./review')
const {expect} = require('chai')

describe('Review', () => {
  before('wait for the db', () => db.didSync)

  describe('definition', () => {

    it('has expected name definition', () => {
      expect(Review.attributes.subject).to.be.an('object');
    })

  })

  describe('validations', () => {
    let review;
    beforeEach('test review', () => {
      review = Review.build();
    })

    it("has a required subject", () => {
      return review.validate()
        .then(err => {
          expect(err).to.be.an('object');
          expect(err.errors[0]).to.contain({
            path: 'subject',
            type: 'notNull Violation'
          })
        })
    })    
 
    it("has a required body", () => {
    return review.validate()
      .then(err => {
        expect(err).to.be.an('object');
        expect(err.errors[1]).to.contain({
          path: 'body',
          type: 'notNull Violation'
        })
      })
    })

    it("has a required body text length", () => {

      const review2 = Review.build({
        subject: "Review2",
        body: "ok"
      })

    return review2.validate()
      .then(result => {
        expect(result).to.be.an.instanceOf(Error);
        expect(result.message).to.contain('Body must be atleast 3 characters in length');
      })
    })    

  })
  
})