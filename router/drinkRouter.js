const drinksRouter = require('express').Router();
const drinksController = require('../controllers/drinksController');
const responseController = require('../controllers/responseController');

drinksRouter.route('/')
  .get(
    drinksController.getAll,
    responseController.sendOkResponse,
    responseController.sendErrorResponse
  )
  .post(
    drinksController.create,
    responseController.sendOkResponse,
    responseController.sendErrorResponse
  );

drinksRouter.route('/:id')
  .get(
    drinksController.getOne,
    responseController.sendOkResponse,
    responseController.sendErrorResponse
  )
  .put(
    drinksController.update,
    responseController.sendOkResponse,
    responseController.sendErrorResponse
  )
  .delete(
    drinksController.destroy,
    responseController.sendOkResponse,
    responseController.sendErrorResponse
  )

  module.exports = drinksRouter
