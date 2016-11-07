const Order = require('../db/models/order')
const OrderProduct = require('../db/models/orderProduct')
const Product = require('../db/models/product')

const cart = require('express').Router()

    //CREATE MIDDLEWARE ROUTE TO SET REQ.SESSION.ORDERID with GUEST/USER ORDERID
    // There are four possible scenarios.
    // 1) A guest with no session.orderId => create order => set req.session.orderid = orderid => query all products
    // 2) A user with previous (guest) session.orderId => search for pending order => ""
    // 3) A guest with a session.orderId => query all products by req.session.orderid
    // 4) A user with a session.orderId => ""

    .use('/', (req, res, next) => {
        //case 2 (changes req.session.orderid from guest's order to user's order when logged in)
        if(req.user) 
            Order.findOrCreate({
                where: {status: 'pending', user_id: req.user.id}
                }
            ).then(order => {
                req.session.orderId = order[0].id
                next()
            }).catch(next)
        //case 1
        else if(!req.session.orderId && !req.user) 
            Order.create({}).then(createdOrder => {
                req.session.orderId = createdOrder.id
                next()
            }).catch(next)
        else next()
    })
    //case 3,4
    //GET ALL PRODUCTS IN ORDER
    .get('/', (req, res, next) => 
        OrderProduct.findAll({
            where: {
                order_id: req.session.orderId
            }
        }).then(products => res.send(products)).catch(next)
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
        Order.findById(req.session.orderId)
        .then(function(foundOrder) {
            return foundOrder.addProduct(req.body.id, {name: req.body.name, price: req.body.price})
        })
        .then(function(order) {
            res.status(201).send(order)
        })
    )

    //DELETE ITEM FROM CART
    .delete('/:productId', (req, res, next) =>
        OrderProduct.destroy({where:{product_id: req.params.productId, order_id: req.session.orderId}})
        .then(function() {
            res.sendStatus(200)
        })
    )

    ///EDIT quantity in  text input field
    // .put('/:productId', (req, res, next) =>

    // )



module.exports = cart
