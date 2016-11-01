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
            // product_id: 1
          },
          {
            subject: 'Good',
            body: 'this box is full of delicious snacks and funny movies',
            // product_id: 1
          },
          {
            subject: 'Bad',
            body: 'this box is full of delicious snacks and funny movies',
            // product_id: 2
          }    
  ]
  const [Great, Good, Bad]
    = reviews

  before('sync database & make reviews', () =>
    db.didSync
      .then(() => Review.destroy({where:{}}))
      .then(() => reviews.map(
        review => Review.create(review)
      ))
      //.then(result => console.log(result))
  )    

  // before('make product', () =>
  //   Product.create({

  //   })
  // )
  
  it('GET / lists all reviews by productId', () =>
    request(app)
      .get('/api/reviews/1')
      .expect(200)
      .then(res => {
        console.log(res.body)
        expect(res.body).to.have.length(3)
        // const [
        //   Great,
        //   Good ] = res.body
        //   //console.log(res.body)
        // expect(Great.id).to.exist
        // expect(Good.subject).to.exist
      })
  )

  // let productOne
  // before(function () {

  //         return Product.create({
  //           name: 'The box',
  //           description: 'you will delight',
  //           inventory_quantity: 1,
  //           price: 0
  //         })
  //         .then(function (p) {
  //           productOne = p;
  //         });
  //       });

  // it('GET ONE / lists single product by id', () =>
  //     request(app)
  //       .get('/api/products/' + productOne.id)
  //       .expect(200)
  //       .then(res => {
  //         //console.log(res.body)
  //         expect(res.body.name).to.exist
  //         expect(res.body.id).to.have.equal(productOne.id)
  //       })
  // )

  // it('POST / creates a product', () =>
  //     request(app)
  //       .post('/api/products')
  //       .send({
  //           name: 'Coloring box',
  //           description: 'you will delight in the whimsical pictures you can create',
  //           inventory_quantity: 1,
  //           price: 13
  //       })
        
  //       .then(res => {
  //         //console.log(res.body)
  //         expect(res.body).to.exist
  //       })
  // )

  // let productTwo
  // before(function () {

  //         return Product.create({
  //           name: 'The box',
  //           description: 'you will delight',
  //           inventory_quantity: 1,
  //           price: 0
  //         })
  //         .then(function (p) {
  //           productTwo = p;
  //         });
  //       });

  // it('DELETE / destroys a product by id', () =>
  //     request(app)
  //       .delete('/api/products/' + productTwo.id)
  //       .then(res => {
  //         console.log(res.body)
  //         expect(200)
  //         //expect(res.body).to.exist
  //       })
  //       //.send({productTwo})
        
  //       // .then(res => {
  //       //   expect(res.status).to.be.200
  //       // })
  // )

})
