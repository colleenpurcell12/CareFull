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

    //UPDATES THE order model to add oderDetails:
    //the req body is an object with all the keys
    //must also change the status
    //look for an example update
    .put('/placeOrder', function(req,res,next){
        //
        console.log('this is what id looks like: ', req.user.id)
        Order.findOne({
            where: {
                user_id: req.user.id,
                status: 'pending'
            }
        })
       // Order.findAll({})
        .then(function(foundOrder) {
            console.log(foundOrder)
            foundOrder.update({
                status: 'complete',
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                address1: req.body.address1,
                address2: req.body.address2,
                city: req.body.city,
                state: req.body.state,
                zipcode: req.body.zipcode,
                cc_type: req.body.cc_type,
                creditcard_number: req.body.creditcard_number
            })
        })
        .catch(next)
    })

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
