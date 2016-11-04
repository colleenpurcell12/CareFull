const db = require('APP/db')

const seedUsers = () => db.Promise.map([
  {name: 'Joe Biden', email: 'joe@biden.com', password: '1234'},
  {name: 'Barack Obama', email: 'barack@example.gov', password: '1234'},
  {name: 'Hillary Clinton', email: 'hill@privateserver.com', password: '1234'},
  {name: 'Michelle Obama', email: 'michelle@whitehouse.gov', password: '1234'},
  {name: 'Jon Kerry', email: 'kerry@statedep.gov', password: '1234'}
], user => db.model('users').create(user))

const seedReviews = () => db.Promise.map([
  {subject: 'Great items!', body: 'I really enjoed the items in the box', rating: 4, product_id: 1, author_id: 2 },
  {subject: 'Loved the package!', body: 'Amazing gift', rating: 4, product_id: 1, author_id: 2 },
  {subject: 'Amazing', body: 'really good', rating: 4, product_id: 2, author_id: 1 },
  {subject: 'Enjoyed it', body: 'such a nice box', rating: 4, product_id: 3, author_id: 1 }
  {subject: 'Good stuff', body: 'loved the collection of goods', rating: 4, product_id: 4, author_id: 1 }
], review => db.model('reviews').create(review))

const seedProducts = () => db.Promise.map([
  			{
            name: 'Snack Package',
            description: 'this box is full of delicious snacks and funny movies',
            inventory_quantity: 1,
            price: 5
          },
          {
            name: 'Puzzle box',
            description: 'this box is full of puzzles of various challenge levels',
            inventory_quantity: 1,
            price: 15
          },
          {
            name: 'Coloring box',
            description: 'you will delight in the whimsical pictures you can create',
            inventory_quantity: 1,
            price: 10
          },
          {
            name: 'Kids art box',
            description: 'fun tools to make a creative design',
            inventory_quantity: 1,
            price: 25
          },
          {
            name: 'Window plant kit',
            description: 'beautiful flowers you can watch grow in your home',
            inventory_quantity: 1,
            price: 25
          },
          {
            name: 'Munchies box',
            description: 'perfect for snacking during the game',
            inventory_quantity: 1,
            price: 25
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






