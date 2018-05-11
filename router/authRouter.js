const authRouter = require('express').Router();
const authController = require('../controllers/authControllers');

authRouter.get('/', authController.restrict, (req, res) => res.json({
    user: res.locals.user
  }));

authRouter.post('/register', authController.register);

authRouter.post('/login', authController.login);

module.exports = authRouter
