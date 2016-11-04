const Order = require('../db/models/order')
const OrderProduct = require('../db/models/orderProduct')
const Product = require('../db/models/product')

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
        Order.findOne({
        	where: 
        		{
        			id: req.params.orderID 
	        	}
	        })
        .then(oneOrder =>
            res.send(oneOrder)
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
    .delete('/:orderId', (req, res, next) =>

        Order.destroy({
            where: {id: req.params.orderId}
            })
        .then(function() {
               res.sendStatus(200);
         })
        .catch(next)
    )

module.exports = orders



