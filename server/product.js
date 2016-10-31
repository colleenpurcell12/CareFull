const Product = require('APP/db/models/product')

const products = require('express').Router()
	//GET ALL
    .get('/', (req, res, next) =>
        Product.findAll()
            .then(products =>
            	console.log(products)
                res.send(products)
            )
    )
    //GET ONE
    .get('/:productID', (req, res, next) =>
        Product.findOne({where:{ id: req.params.productID }})
            .then(oneProduct =>
            	//console.log(oneProduct)
                res.send(oneProduct)
            )
    )

module.exports = products

