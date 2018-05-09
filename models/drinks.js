const db = require('../config/connection');

//this gets all fav drinks for one user
function getMatch(id) {
return querypromise = db.any(`
  SELECT *
  FROM favorites
  JOIN users
  ON users.id = favorites.user_id
  WHERE users.id = $1
  `)
}

//get one favorited drink
function getOne(id) {
  return querypromise = db.one(`
    SELECT *
    FROM favorites
    WHERE user_id = $1
    `, id
  )
}

//create a favorite drink
function create(drink) {
  if (!drink.image_url) drink.image_url = "https://cdn3.iconfinder.com/data/icons/glypho-travel/64/drinks-martini-and-wine-512.png";
  return querypromise = db.one(`
    INSERT INTO favorites (drink_name, image_url, ingredients, instructions, user_id)
    VALUES ($/drink_name/, $/image_url/, $/ingredients/, $/instructions/, $/user_id)
    RETURNING *
    `, drink
  )
}

//update one drink
function update(drink_id){
  return querypromise = db.one(`
    UPDATE favorites
    SET drink_name = $/drink_name/, image_url = $/image_url/, ingredients = $/ingredients/, user_id = $/user_id/, instructions = $/instructions/
    WHERE drink_id = $/drink_id/
    RETURNING *
    `, drink);
}

//delete drink
function destroy(drink_id){
  return querypromise = db.none(`
    DELETE FROM favorites WHERE drink_id = $1
    `, id
    );
}


module.exports = {
  getAll,
  getOne,
  create,
  update,
  destroy,
}
