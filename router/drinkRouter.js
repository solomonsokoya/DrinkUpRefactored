const drinksRouter = require('express').Router();
const drinksController = require('../controllers/drinksController');
const responseController = require('../controllers/responseController');

// drinksRouter.route('/')
//   .get(
//     drinksController.getAll,
//     responseController.sendOkResponse,
//     responseController.sendErrorResponse
//   )


//Gets all Drinks for one user
drinksRouter.route('/user/:id')
  .get(
    drinksController.getAll,
    responseController.sendOkResponse,
    responseController.sendErrorResponse
  ).post(
    drinksController.create,
    responseController.sendOkResponse,
    responseController.sendErrorResponse
  );


//Updates individual drink and deletes drink
drinksRouter.route('/drink/:id')
  .put(
    drinksController.update,
    responseController.sendOkResponse,
    responseController.sendErrorResponse
  ).delete(
    drinksController.destroy,
    responseController.sendOkResponse,
    responseController.sendErrorResponse
  )

  module.exports = drinksRouter
