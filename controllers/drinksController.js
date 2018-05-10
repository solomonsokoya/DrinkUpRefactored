const drinkDb = require('../models/drinks');

//getAll fav drinks for one user
function getMatch(req, res, next) {
  drinkDb.getMatch(req.params.id)
    .then(data => {
      res.locals.drinks = data;
      next();
    })
    .catch(next);
}

function getOne(req, res, next) {
  drinkDb.getOne(req.params.id)
  .then(data => {
    res.locals.drink = data;
    next();
  })
  .catch(next);
}

function create(req, res, next) {
  drinkDb.create(req.body)
  .then(data => {
    res.locals.drink = data;
    next();
  })
  .catch(next);
}

function update(req, res, next) {
  drinkDb.update(req.body)
  .then(data => {
    res.locals.drink = data;
    next();
  })
  .catch(next);
}

function destroy(req, res, next) {
  drinkDb.destroy(req.params.id)
  .then(() => {
    next()
  })
  .catch(next);
}

module.exports = {
  getMatch,
  getOne,
  create,
  update,
  destroy
};
