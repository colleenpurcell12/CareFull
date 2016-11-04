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

    //UPDATES THE order model to add oderDetails:
    //the req body is an object with all the keys
    //must also change the status
    //look for an example update
    .put('/placeOrder', function(req,res,next){
        //
        Order.findOne({
            where: {
                user_id: req.user_id
                status: 'pending'
            }
        })
        .then(function(currentOrder){ ///FIX CHECK
            cart.update({
                status: 'complete',

                first_name: req.body.first_name,
                last_name: req.body.first_name,
                address1: req.body.first_name,
                address2: req.body.first_name,
                city: req.body.first_name,
                state: req.body.first_name,
                zipcode: req.body.first_name,
                creditcard:  req.body.first_name,
            })
        }
        .catch(next)
        //DOES THIS RETURN THE OBJECT atfer update, might need to reload
    })

    .post('/', function(req,res,next){
        Product.create(req.body) 
        .then(function(orderCreated){
            res.status(201).send({ orderCreated }) //close res.send promise
        }) //close then promise
        .catch(next)
        //} 

    })
    .delete('/:productID', (req, res, next) =>

        Product.destroy({
            where: {id: req.params.orderID}
            })
        .then(function() {
               res.sendStatus(200);
         })
        .catch(next)
    )

module.exports = orders

