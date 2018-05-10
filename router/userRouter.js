const usersRouter = require('express').Router();
const usersController = require('../controllers/userController');
const responseController = require('../controllers/responseController');


usersRouter.route('/profile/:id')
.get(
    usersController.getOneUser,
    responseController.sendOkResponse,
    responseController.sendErrorResponse
  )
  .put(
    usersController.updateUser,
    responseController.sendOkResponse,
    responseController.sendErrorResponse
  )
  .delete(
    usersController.deleteUser,
    responseController.sendOkResponse,
    responseController.sendErrorResponse
  )
usersRouter.route('/profile')
  .get(
    usersController.getAllUsers,
    responseController.sendOkResponse,
    responseController.sendErrorResponse
    )
module.exports = usersRouter
