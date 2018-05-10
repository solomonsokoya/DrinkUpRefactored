const drinkDb = require('../models/drinks');

//getAll fav drinks for one user
function getAll(req, res, next) {
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
  req.body.user_id = req.params.id
  drinkDb.create(req.body)
  .then(data => {
    res.locals.drink = data;
    next();
  })
  .catch(next);
}

function update(req, res, next) {
  req.body.drink_id = req.params.id
  console.log(req.body)
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
  getAll,
  getOne,
  create,
  update,
  destroy
};
