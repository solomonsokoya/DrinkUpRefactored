//connection to the databe
const db = require('../config/connection.js');
const bcrypt = require ('bcrypt');
const saltRounds = 10

//Take the authorization attempt(email, password) and then hash the password
function registerUser(authorization){
  return bcrypt.hash(authorization.password, saltRounds)
  .then(hash => {
    const newUser = {
      username: authorization.username,
      email: authorization.email,
      password: hash,
      pic_url: authorization.pic_url
    };

//Create user, insert into database, and return the info
    return queryPromise = db.one(`
    INSERT INTO users (username, email, password, pic_url)
    VALUES ($/username/, $/email/, $/password/, $/pic_url/)
    RETURING *
     `, newUser)
  });
}

//Finds email of user
function findByEmail(email){
  return queryPromise = db.one(`
  SELECT *
  FROM users
  WHERE email = $1
    `, email)
}

//Attempts to log user in
function loginUser(attempt){
  return findByEmail(attempt.email)
  .then(user => (

    bcrypt.compare(attempt.password, user.password)
    .then(match => {
      if(!match) throw new Error('attempt is not valid')
        delete user.password;
      return user;
    })
    ));
}

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
  registerUser: registerUser,
  loginUser: loginUser,
  findByEmail: findByEmail,
  deleteUser: deleteUser,
  updateUser: updateUser,
  getOneUser: getOneUser,
  getAllUsers: getAllUsers
}
