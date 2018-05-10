const userDb = require('../models/userModels');

function getAllUsers(req, res, next) {
  userDb.getAllUsers()
  .then(data => {
    res.locals.users = data;
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
  req.body.id = req.params.id
  console.log(req.body)
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
