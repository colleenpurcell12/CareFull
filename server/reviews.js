const Review = require('../db/models/review')

const reviewRouter = require('express').Router()
	//GET ALL by productId
    .get('/:productId', (req, res, next) =>
        Review.findAll({
            where: {
                productId: req.params.productId
            }
        })
            .then(reviews =>
                res.send(reviews)
            )
            .catch(next)

    )
    //POST ONE 
    .post('/', function(req,res,next){
        Review.create(req.body) //onSubmit should include productId & userId 
        .then(function(reviewCreated){
            console.log("review Created", reviewCreated)
            res.status(201).send({ reviewCreated }) 
        }) 
        .catch(next)
    })
    //DELETE ONE
    .delete('/reviewId', (req, res, next) =>
        Review.destroy({
            where: {id: req.params.reviewId}
            })
        .then(function() {
               res.sendStatus(200);
         })
        .catch(next)
    )

module.exports = reviewRouter