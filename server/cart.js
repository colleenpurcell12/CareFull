const Order = require('../db/models/order')
const OrderProduct = require('../db/models/orderProduct')
const Product = require('../db/models/product')

const cart = require('express').Router()


    //req.session.orderId
    //query orderid and set to req.session
    //OrderProduct.findAll(req.session.orderId)
    //return name, price, quanity, productid, orderid
    //Cart routes
        //onEnter route at main route, loads cart at every page 
    //GET ALL ITEMS IN CART
    .get('/', (req, res, next) => 
         Order.getCart(req.user) //custom function, find or creates pending order
        .then(function(foundOrder) {
            res.send( foundOrder)
            // use getAssociation order
           return foundOrder.getProducts()
 
        })
        .then(function(foundProductsDetailInOrder){
            res.send(foundProductsDetailInOrder)
        })
        .catch(err => console.log(err))

    )
  
    //GET ALL PAST ORDERS
    .get('/orderhistory', (req, res, next) =>
        Order.findAll({
            where: {
                user_id: req.user.id,
                status: {$not: 'pending'}
            }
        })
        .then(function(orderhistory) {
            res.send(orderhistory)
        }) 
        .catch(next)
    )
    //ADD ITEM TO CART
    .post('/', (req, res, next) =>
        Order.getCart(req.user)
        .then(function(foundOrder) {  //req,body is product 
            return foundOrder.addProduct(req.body, {name: req.body.name, price: req.body.price})
        })
        .then(function(itemAddedToCart){
            res.status(201).send(itemAddedToCart)
        })  
        .catch(next)
    )
    //DELETE ITEM FROM CART
    .delete('/:productId', (req, res, next) => 
        Order.getCart(req.user)
        .then(function(foundOrder) {
            return foundOrder.removeProduct(productId)
        })
    )

    ///EDIT quantity in  text input field
    // .put('/:productId', (req, res, next) => 

    // )



module.exports = cart 