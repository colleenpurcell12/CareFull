 const request = require('supertest-as-promised')
const {expect} = require('chai')
const db = require('APP/db')
const Order = require('APP/db/models/order')
const User = require('APP/db/models/user')

const Product = require('APP/db/models/product')
const app = require('./start')


const alice = {
  username: 'alice@secrets.org',
  password: '12345'
}

describe('/api/cart', () => {

  const agent = request.agent(app)
  before('sync database & make reviews', () =>
    db.didSync
      .then(() => Order.destroy({where:{}}))
      .then(() =>
        User.create(
          {email: alice.username,
          password: alice.password
        }))
      .then(() => agent
        .post('/api/auth/local/login') 
        .send(alice))
  )
 
  it('GET / lists all products by cart', () =>
    request(app)
      .get('/api/cart')
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
