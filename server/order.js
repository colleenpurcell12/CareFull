const Order = require('../db/models/order')
const OrderProduct = require('../db/models/orderProduct')

const orders = require('express').Router()
	//GET ALL
    .get('/', (req, res, next) =>
        Order.findAll({})
            .then(orders =>
                res.send(orders)
            )
            .catch(next)

    )
    //GET ONE
    .get('/:orderID', (req, res, next) =>
        Product.findOne({
        	where: 
        		{
        			id: req.params.orderID 
	        	}
	        })
        .then(oneProduct =>
            res.send(oneProduct)
        )
        .catch(next)
    )
    //
    .post('/', function(req,res,next){
        Product.create(req.body) 
        .then(function(orderCreated){
            res.status(201).send({ orderCreated }) //close res.send promise
        }) //close then promise
        .catch(next)
        //} 

    })
    //
    .delete('/:productID', (req, res, next) =>

        Product.destroy({
            where: {id: req.params.orderID}
            })
        .then(function() {
               res.sendStatus(200);
         })
        .catch(next)
    )
    //Cart routes
        //onEnter route at main route, loads cart at every page 
    .get('/:userId/cart', (req, res, next) => 
         OrderProduct.getCart(req.params.userId)
        .then(function(foundOrder) {
            return OrderProduct.findAll({
                where: {order_id: foundOrder.id}, 
                // include: [{model: Product}] how does this work? 
                }
        )
        .then(function(foundProductsInOrder) {
            res.send(foundProductsInOrder)
        })
    })
        .catch(next)

    )

    .get('/:userId/orderhistory', (req, res, next) =>
        Order.findAll({
            where: {
                user_id: req.params.userId,
                status: {$not: 'pending'}
            }
        })
        .then(function(orderhistory) {
            res.send(orderhistory)
        }) 
        .catch(next)
    )

    .post('/:userId/cart/', (req, res, next) =>
        OrderProduct.getCart(req.params.userId)
        .then(function(foundOrder) {  //req,body is product
            return foundOrder.addProduct(req.body, {price: req.body.price})
        })
        .then(function(itemAddedToCart){
            res.status(201).send(itemAddedToCart)
        })  
        .catch(next)
    )


module.exports = orders



