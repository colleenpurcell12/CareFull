const db = require('APP/db')

const seedUsers = () => db.Promise.map([
  {name: 'so many', email: 'god@example.com', password: '1234'},
  {name: 'Barack Obama', email: 'barack@example.gov', password: '1234'},
], user => db.model('users').create(user))

const seedProducts = () => db.Promise.map([
  {name: 'Coloring Package', description: 'Neato coloring books and markers', price: 20.00, inventory_quantity: 12},
  {name: 'Snack Attack Pack', description: 'So many snacks', price: 12.37, inventory_quantity: 7},
], product => db.model('products').create(product))

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .then(seedProducts)
  .then(products => console.log(`Seeded ${products.length} users OK`))
  .catch(error => console.error(error))
  .finally(() => db.close())
