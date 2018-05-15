const drinksRouter = require('express').Router();
const drinksController = require('../controllers/drinksController');
const responseController = require('../controllers/responseController');
const authController = require('../controllers/authControllers');



//Gets all Drinks for one user
drinksRouter.route('/user/:id')
  .get(
    authController.restrict,
    drinksController.getAll,
    responseController.sendOkResponse,
    responseController.sendErrorResponse
  ).post(
    authController.restrict,
    drinksController.create,
    responseController.sendOkResponse,
    responseController.sendErrorResponse
  );


//Updates individual drink and deletes drink
drinksRouter.route('/drink/:id')
  .put(
    authController.restrict,
    drinksController.update,
    responseController.sendOkResponse,
    responseController.sendErrorResponse
  ).delete(

    drinksController.destroy,
    responseController.sendOkResponse,
    responseController.sendErrorResponse
  )

  module.exports = drinksRouter
