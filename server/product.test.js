const request = require('supertest-as-promised')
const {expect} = require('chai')
const db = require('APP/db')
const Product = require('APP/db/models/product')
const app = require('./start')

describe('/api/products', () => {
  const products = [
          {
            name: 'Snack Package',
            description: 'this box is full of delicious snacks and funny movies',
            inventory_quantity: 1,
            price: 11
          },
          {
            name: 'Puzzle box',
            description: 'this box is full of puzzles of various challenge levels',
            inventory_quantity: 1,
            price: 12
          },
          {
            name: 'Coloring box',
            description: 'you will delight in the whimsical pictures you can create',
            inventory_quantity: 1,
            price: 13
          }    
  ]
  const [snackPackage, puzzlePackage, coloringPackage]
    = products

  before('sync database & make products', () =>
    db.didSync
      .then(() => Product.destroy({where:{}}))
      .then(() => products.map(
        product => Product.create(product)
      ))
  )
  it('GET / lists all products', () =>
    request(app)
      .get(`/api/products/`)
      .expect(200)
      .then(res => {
        expect(res.body).to.have.length(products.length)
        const [
          gotSnackPack, 
          gotPuzzles, 
          gotColoring ] = res.body
          //console.log(res.body)
        expect(gotSnackPack.id).to.exist
        expect(gotSnackPack.name).to.exist

        // expect(gotSnackPack).to.contains(snackPackage)
        // expect(gotPuzzles).to.contains(puzzlePackage)
        // expect(gotColoring).to.contains(coloringPackage)
      })
  )

  let productOne
  before(function () {

          return Product.create({
            name: 'The box',
            description: 'you will delight',
            inventory_quantity: 1,
            price: 0
          })
          .then(function (p) {
            productOne = p;
          });
        });

  it('GET ONE / lists single product by id', () =>
      request(app)
        .get('/api/products/' + productOne.id)
        .expect(200)
        .then(res => {
          //console.log(res.body)
          expect(res.body.name).to.exist
          expect(res.body.id).to.have.equal(productOne.id)
        })
  )

  it('POST / creates a product', () =>
      request(app)
        .post('/api/products')
        .send({
            name: 'Coloring box',
            description: 'you will delight in the whimsical pictures you can create',
            inventory_quantity: 1,
            price: 13
        })
        
        .then(res => {
          //console.log(res.body)
          expect(res.body).to.exist
        })
  )

  let productTwo
  before(function () {

          return Product.create({
            name: 'The box',
            description: 'you will delight',
            inventory_quantity: 1,
            price: 0
          })
          .then(function (p) {
            productTwo = p;
          });
        });

  it('DELETE / destroys a product by id', () =>
      request(app)
        .delete('/api/products/' + productTwo.id)
        .then(res => {
          console.log(res.body)
          expect(200)
          //expect(res.body).to.exist
        })
        //.send({productTwo})
        
        // .then(res => {
        //   expect(res.status).to.be.200
        // })
  )

})