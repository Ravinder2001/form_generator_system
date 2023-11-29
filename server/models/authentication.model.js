const client = require("../config/db");
module.exports = {
  Register: ({ name, email, password }) => {
    return new Promise(function (resolve, reject) {
      try {
        const response = client.query(`INSERT INTO users(name,email,password) VALUES($1,$2,$3) RETURNING id`, [name, email, password]);
        resolve(response);
      } catch (err) {
        reject(err);
      }
    });
  },
  Login: ({ email }) => {
    return new Promise(function (resolve, reject) {
      try {
        const response = client.query(`SELECT id,password,name FROM users WHERE email=$1`, [email]);
        resolve(response);
      } catch (err) {
        reject(err);
      }
    });
  },
  GetUserById: ({ id }) => {
    return new Promise(function (resolve, reject) {
      try {
        const response = client.query(`SELECT id from users WHERE id=$1`, [id]);
        resolve(response);
      } catch (err) {
        reject(err);
      }
    });
  },
  IsUserEmailExists: ({ email }) => {
    return new Promise(function (resolve, reject) {
      try {
        const response = client.query(`SELECT COUNT(id) from users WHERE email=$1`, [email]);
        resolve(response);
      } catch (err) {
        reject(err);
      }
    });
  },
};
