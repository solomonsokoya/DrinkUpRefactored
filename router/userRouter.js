const usersRouter = require('express').Router();
const usersController = require('../controllers/usersController');


userRouter.route('/profile/:id')
  .get(
    usersController.getOne,
    responseController.sendOkResponse,
    responseController.sendErrorResponse
  )
  .put(
    usersController.update,
    responseController.sendOkResponse,
    responseController.sendErrorResponse
  )
  .delete(
    usersController.destroy,
    responseController.sendOkResponse,
    responseController.sendErrorResponse
  )
  .post(
    usersController.create,
    responseController.sendOkResponse,
    responseController.sendErrorResponse
  );

module.exports = userRouter
