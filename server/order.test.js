 const request = require('supertest-as-promised')
const {expect} = require('chai')
const db = require('APP/db')
const Order = require('APP/db/models/order')
const Product = require('APP/db/models/product')
const app = require('./start')

describe('/api/orders', () => {

  before('sync database & make reviews', () =>
    db.didSync
      .then(() => Order.destroy({where:{}}))
  )

  it('GET / lists all products by cart', () =>
    request(app)
      .get('/api/orders/1/cart')
      .expect(200)
      .then(res => {
        expect(res.body).to.exist
      })
  )

  // it('POST / creates a review for a user', () =>
  //   request(app)
  //     .post('/api/reviews')
  //     .send({
  //         subject: 'delicious',
  //         body: 'wonderful box',
  //         product_id: 1,
  //         user_id: 1
  //     })
  //     .then(res => {
  //       expect(res.body).to.exist
  //     })
  // )

  // it('DELETE / destroys a review by id', () =>
  //   request(app)
  //     .delete('/api/reviews/' + bad.id)
  //     .then(res => {
  //       expect(200)
  //       expect(res.body.id).to.be.eql(bad.id)
  //     })
  // )

})
