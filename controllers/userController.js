//connection to the databe
const db = require('../config/connection.js');

//Get all user within the database
function getAllUsers(){
  return queryPromise = db.any(`
    SELECT * FROM users
    `);
    }
//Get One user within the database
function getOneUser(id){
  return queryPromise = db.one(`
    SELECT *
    FROM users
    WHERE id = $1`, id);
    }
//Create user, insert into database, and return the info
function createUser(user){
  return queryPromise = db.one(`
    INSERT INTO users (username, email, password, pic_url)
    VALUES ($/username/, $/email/, $/password/, $/pic_url/)
    RETURING *
     `, user)
}
//Updates users info and returns the info
function updateUser(user){
  return queryPromise = db.one(`
    UPDATE users
    SET username = $/username/, email = $/email/, password = $/password/, pic_url= $/pic_url/
    WHERE id = $/id/
    RETURING *`, user);
}
//Delete a user from database
function deleteUser(id){
  return queryPromise = db.none(`
    DELETE FROM users
    WHERE id = $1`, id);
}

module.exports ={
  deleteUser: deleteUser,
  updateUser: updateUser,
  createUser: createUser,
  getOneUser: getOneUser,
  getAllUsers: getAllUsers
}
