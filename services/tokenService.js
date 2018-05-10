const jwt = require('jsonwebtoken');
const secret = process.env.TOKEN_SECRET || 'supersecuresecret';

function makeToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      secret,
      (err, data) => err ? reject(err) : resolve(data)
    )
  });
}

function verify(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(
      token,
      secret,
      (err, data) => err ? reject(err) : resolve(data)
    )
  });
}

module.exports = {
  makeToken,
  verify
};
