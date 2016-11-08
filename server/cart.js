const Order = require('../db/models/order')
const OrderProduct = require('../db/models/orderProduct')
const Product = require('../db/models/product')
const Promise = require('bluebird')

const cart = require('express').Router()

    //CREATE MIDDLEWARE ROUTE TO SET REQ.SESSION.ORDERID with GUEST/USER ORDERID
    // There are four possible scenarios.
    // 1) A guest with no session.orderId => create order => set req.session.orderid = orderid => query all products
    // 2) A user with previous (guest) session.orderId => search for pending order => ""
    // 3) A guest with a session.orderId => query all products by req.session.orderid
    // 4) A user with a session.orderId => ""

    .use('/', (req, res, next) => {
        console.log(req.session)
        //case 2 (changes req.session.orderid from guest's order to user's order when logged in)
        if(req.user) 
            // if(req.session.orderId) {
            //     OrderProduct.findAll({
            //         where: {
            //             order_id: req.session.orderId
            //         }
            //     })
            // }
            Order.findOrCreate({
                where: {status: 'pending', user_id: req.user.id}
                }
            ).then(order => {
                req.session.orderId = order[0].id
                if(req.session.orderProducts.length) {
                    return Promise.map(req.session.orderProducts, (product => {
                        return order[0].addProduct(product.product_id, {name: product.name, price: product.price, quantity: product.quantity})
                        })
                    )
                }
            }).then(() => {
                req.session.orderProducts = [];
                next()
            })
                
        //case 1
        else if(!req.user) { 
            if(!req.session.orderId)
                Order.create({})
                .then(function(createdOrder) {
                    req.session.orderId = createdOrder.id
                    next()
                })
            else 
                Order.findOrCreate({
                    where: {id: req.session.orderId, status: 'pending'}
                }).then(createdOrder => {
                    //no user, but order ID, so all the data is stored in the model and can be queried
                    next()
                })
        }
            
    })
    //case 3,4
    //GET ALL PRODUCTS IN ORDER


    //examples
    //start as guest, add to cart, products on session,
    //then log in and combine the model instance(query by user) with the session products
    //logout removes the cart
    //query by user
    .get('/', (req, res, next) => 
        OrderProduct.findAll({
            where: {
                order_id: req.session.orderId
            }
        }).then(products => {

            if(!req.user) {
                if(!req.session.orderProducts) {
                    req.session.orderProducts = []; //guest session keeps track of orders so we can roll over when user signs on   
                } 
                products.forEach(product => 
                    // console.log(product) //works
                    req.session.orderProducts.push(product)
                )
            }
            res.send(products)
        })
        .catch(next)

    )

    //ADD ITEM TO CART
    .post('/', (req, res, next) => { 
        req.session.orderProducts = []
        var theFoundOrder, newItem;
        Order.findById(req.session.orderId)
        .then(function(foundOrder) { //req.body = product
            theFoundOrder = foundOrder;
            return OrderProduct.findOne({
                where:  {
                    product_id: req.body.id,
                    order_id: foundOrder.id
                }   
            })
        })
        .then(function(foundProduct) {
            if(foundProduct) {
                return foundProduct.increment('quantity', {by: 1})
            }
            else {
                newItem = true;
                return theFoundOrder.addProduct(req.body.id, {name: req.body.name, price: req.body.price})
            }
        })
        .then(function(order) {
            // console.log(order)
            // if(!req.user) {
            //         if(!req.session.orderProducts) {
            //             req.session.orderProducts = []; //guest session keeps track of orders so we can roll over when user signs on   
            //         } 
            //         req.session.orderProducts.push(order[0][0])   
            //     }
            res.status(201).send(order)
        })
    })

    //DELETE ITEM FROM CART
    .delete('/:productId', (req, res, next) =>
        OrderProduct.destroy({where:{product_id: req.params.productId, order_id: req.session.orderId}})
        .then(function() {
            res.sendStatus(200)
        })
    )

    ///EDIT quantity in  text input field
    .put('/:productId', (req, res, next) =>  {
        //console.log("****HIT THE BACK END PUT ROUTE req.body.quantity",req.body)
        OrderProduct.findOne({
            where: {
                product_id: req.params.productId,
                order_id: req.session.orderId
            }
        })
        .then(function(product) {
            return product.update({
                quantity: req.body.quantity
            })
        }).then(function(updatedProduct) {
            res.status(202).send(updatedProduct)
        })
    })



module.exports = cart
