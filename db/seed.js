const db = require('APP/db')

const seedUsers = () => db.Promise.map([
  {name: 'Joe Biden', email: 'joe@biden.com', password: '1234'},
  {name: 'Barack Obama', email: 'barack@example.gov', password: '1234'},
], user => db.model('users').create(user))

const seedReviews = () => db.Promise.map([
  {subject: 'Enjoyed it', body: 'wanna take it behind the bleachers', rating: 4, product_id: 1, author_id: 2 },
  {subject: 'Amazing', body: 'really good', rating: 4, product_id: 1, author_id: 1 },
], review => db.model('reviews').create(review))

const seedProducts = () => db.Promise.map([
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

], product => db.model('products').create(product))

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))

  .then(seedProducts)
  .then(products => console.log(`Seeded ${products.length} products OK`))

  .then(seedReviews)
  .then(reviews => console.log(`Seeded ${reviews.length} reviews OK`))

  .catch(error => console.error(error))    
  .finally(() => db.close())






