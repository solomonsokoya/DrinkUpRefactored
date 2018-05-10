const userDb = require('../models/userModels');

function getAllUsers(req, res, next) {
  userDb.getAllUsers()
  .then(data => {
    rees.locals.users = data;
    next();
  })
  .catch(next);
}

function getOneUser(req, res, next) {
  userDb.getOneUser(req.params.id)
  .then(data => {
    res.locals.user = data;
    next();
  })
  .catch(next);
}

function updateUser(req, res, next) {
  userDb.updateUser(req.body)
  .then(data => {
    res.locals.user = data;
    next();
  })
  .catch(next);
}

function deleteUser(req, res, next) {
  userDb.deleteUser(req.params.id)
  .then(() => {
    next()
  })
  .catch(next);
}




module.exports = {
  getAllUsers,
  getOneUser,
  updateUser,
  deleteUser
}
