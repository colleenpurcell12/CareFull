const { Review } = require('APP/db/models')
const { User } = require('APP/db/models')

const reviewRouter = require('express').Router()
	//GET ALL by productId
    .get('/:productId', (req, res, next) =>
        Review.findAll({
            include: [{model: User, as: 'author'}],
            where: {
                product_id: req.params.productId
            }
        })
        .then(reviews => {
            res.send(reviews)
            }
        )
        .catch(next)

    )
    //POST ONE
    .post('/', function(req,res,next){

        Review.create(req.body) //onSubmit should include productId & userId
        .then(function(reviewCreated){
            return reviewCreated.reload({include: [{model: User, as: 'author'}]})
        })
        .then( function(newReview) {
          res.send(newReview)
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
