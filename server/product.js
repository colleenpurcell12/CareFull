const Product = require('../db/models/product')

const products = require('express').Router()
	//GET ALL
    .get('/', (req, res, next) =>
        Product.findAll({})
            .then(products =>
                console.log("REQ.SESSION", req.session)
                console.log("REQ.USER", req.user)
                res.send(products)
            )
            .catch(next)

    )
    //GET ONE
    .get('/:productID', (req, res, next) =>
        Product.findOne({
        	where: 
        		{
        			id: req.params.productID 
	        	}
	        })
        .then(oneProduct =>
            res.send(oneProduct)
        )
        .catch(next)
    )
    .post('/', function(req,res,next){
        Product.create(req.body) 
        .then(function(productCreated){
            res.status(201).send({ productCreated }) //close res.send promise
        }) //close then promise
        .catch(next)
        //} 
    })
    .delete('/:productID', (req, res, next) =>
        Product.destroy({
            where: {id: req.params.productID}
            })
        .then(function() {
               res.sendStatus(200);
         })
        .catch(next)
    )

module.exports = products

