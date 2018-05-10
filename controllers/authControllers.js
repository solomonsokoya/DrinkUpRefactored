const tokenService = require('../services/tokenService.js');
const userModel = require('../models/userModels.js');

function receiveToken(req, res, next) {
  if (req.headers.authorization) {
    req.authToken = req.headers.authorization.replace(/^Bearer\s/, '');
  }
  next();
};

function register(req, res) {
  userModel.registerUser(req.body)
    .catch(err => res.status(401).json({
      message: 'Username taken'
    }))
    .then(data => tokenService.makeToken({
        email: data.email,
        id: data.id
    }))
    .then(token => {
      res.json({
        token
      })
    });
}

function restrict(req, res, next) {
    tokenService.verify(req.authToken)
      .then(data => {
        res.locals.user = data;
        next();
      })
      .catch(err => res.status(401).json({
        status: 'Error',
        message: 'Invalid credentials'
      }))
  }

function login(req, res, next) {
  userModel.loginUser(req.body)
    .catch(err => res.status(401).json({
      status: 'Error',
      message: 'Invalid credentails'
    }))
    .then(data => tokenService.makeToken({
      id: data.id,
      email: data.email
    }))
    .then(token => {
      res.json({
        token
      })
    })
}

module.exports = {
  receiveToken,
  register,
  restrict,
  login
}
