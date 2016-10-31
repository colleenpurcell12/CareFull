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
            quantity: 1,
            price: 11
          },
          {
            name: 'Puzzle box',
            description: 'this box is full of puzzles of various challenge levels',
            quantity: 1,
            price: 12
          },
          {
            name: 'Coloring box',
            description: 'you will delight in the whimsical pictures you can create',
            quantity: 1,
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
      .get(`/api/products`)
      .expect(200)
      .then(res => {
        expect(res.body).to.have.length(products.length)
        const [
          gotSnackPack, 
          gotPuzzles, 
          gotColoring ] = res.body
        expect(gotSnackPack).to.contain(snackPackage)
        expect(gotPuzzles).to.contain(puzzlePackage)
        expect(gotColoring).to.contain(coloringPackage)
      })
  )

  it('GET ONE / lists single product by id', () =>
      request(app)
        .get('/api/products/:productID')
        
        .expect(200)
        .then(res => {
          expect(res.body).to.have.length(1)
          expect(res.body.id).to.have.equal(req.params.productID)
        })
  )
  it('POST / creates a product', () =>
      request(app)
        .post('/api/products')
        .send({
            name: 'Coloring box',
            description: 'you will delight in the whimsical pictures you can create',
            quantity: 1,
            price: 13
        })
        .expect(201)
  )

})
