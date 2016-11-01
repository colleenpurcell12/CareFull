const Product = require('../db/models/product')

const products = require('express').Router()
	//GET ALL
    .get('/', (req, res, next) =>
        Product.findAll()
            .then(products =>
                res.send(products)
            )
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
    )

module.exports = products

