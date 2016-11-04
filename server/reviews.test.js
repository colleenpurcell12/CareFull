 const request = require('supertest-as-promised')
const {expect} = require('chai')
const db = require('APP/db')
const Review = require('APP/db/models/review')
const Product = require('APP/db/models/product')
const app = require('./start')

describe('/api/reviews', () => {
  const reviews = [
    {
      subject: 'Great',
      body: 'this box is full of delicious snacks and funny movies',
      product_id: 1
    },
    {
      subject: 'Good',
      body: 'this box is full of delicious snacks and funny movies',
      product_id: 1
    },
    {
      subject: 'Bad',
      body: 'this box is full of delicious snacks and funny movies',
      product_id: 2
    }    
  ]
  const [great, good, bad]
    = reviews

  before('sync database & make reviews', () =>
    db.didSync
      .then(() => Review.destroy({where:{}}))
      .then(() => reviews.map(
        review => Review.create(review)
      ))
  )

  it('GET / lists all reviews by productId', () =>
    request(app)
      .get('/api/reviews/1')
      .expect(200)
      .then(res => {
        expect(res.body).to.have.length(2)
        const [
          great,
          good ] = res.body
        expect(great.id).to.exist
        expect(good.subject).to.exist
      })
  )

  it('POST / creates a review for a user', () =>
    request(app)
      .post('/api/reviews')
      .send({
          subject: 'delicious',
          body: 'wonderful box',
          product_id: 1,
          author_id: 1
      })
      .then(res => {
        expect(res.body).to.exist
      })
  )

  it('DELETE / destroys a review by id', () =>
    request(app)
      .delete('/api/reviews/' + bad.id)
      .then(res => {
        expect(200)
        expect(res.body.id).to.be.eql(bad.id)
      })
  )

})
