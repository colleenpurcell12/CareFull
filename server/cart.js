const Order = require('../db/models/order')
const OrderProduct = require('../db/models/orderProduct')
const Product = require('../db/models/product')

const cart = require('express').Router()


    .get('/', (req, res, next) => 
         Order.getCart(req.user) //custom function, find or creates pending order
        .then(function(foundOrder) {
            res.send( foundOrder)
            // use getAssociation order
           return foundOrder.getProducts()
            
        // console.log("found order", foundOrder[0].id)
            // return OrderProduct.findAll({
            //     where: {order_id: foundOrder[0].id}, 
            //     include: [Product] 
            //     }
            // ) //return array order id product id 
        })
        .then(function(foundProductsDetailInOrder){
            res.send(foundProductsDetailInOrder)
        })
        .catch(err => console.log(err))
        // .then(function(foundProductsInOrder) {
        //     return foundProductsInOrder.map(function(productInOrder) {
        //         return Product.findById(productInOrder.product_id)

        //     })
        // })
        // .then(function(foundProductsDetailInOrder) {
        //     console.log("found products", foundProductsDetailInOrder)
        //     res.send(foundProductsDetailInOrder)
        // })
        // .catch(next)

    )

    //Cart routes
        //onEnter route at main route, loads cart at every page 
    
    

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

    .post('/cart', (req, res, next) =>
        Order.getCart(req.user)
        .then(function(foundOrder) {  //req,body is product 
            return foundOrder.addProduct(req.body, {price: req.body.price})
        })
        .then(function(itemAddedToCart){
            res.status(201).send(itemAddedToCart)
        })  
        .catch(next)
    )

module.exports = cart 