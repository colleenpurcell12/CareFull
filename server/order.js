const Order = require('../db/models/order')

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
    .post('/', function(req,res,next){
        Product.create(req.body) 
        .then(function(orderCreated){
            res.status(201).send({ orderCreated }) //close res.send promise
        }) //close then promise
        .catch(next)
        //} 
    });
    .delete('/:orderID', (req, res, next) =>
        Product.destroy({
            where: {id: req.params.orderID}
            })
        .then(function() {
               res.sendStatus(200);
         })
        .catch(next)
    )

module.exports = orders

