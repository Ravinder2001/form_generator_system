const Encrypt = require("../helpers/Bcrypt/bcrypt");
const genrateToken = require("../helpers/JWT/genrateJWT");
const { Register, Login } = require("../models/authentication.model");
const { Bad, Success, NanoIdLength } = require("../utils/constant");
const bcrypt = require("bcrypt");
const { InvalidPassword, UserNotFound } = require("../utils/message");

module.exports = {
  Register_User: async (req, res) => {
    try {
      let hashedPassword = await Encrypt(req.body.password);
      const { nanoid } = await import("nanoid");
      const id = nanoid(NanoIdLength);
      const response = await Register({ id, name: req.body.name, email: req.body.email, password: hashedPassword });
      let token_Schema = {
        id: response.rows[0].id,
        name: response.rows[0].name,
      };
      let token = genrateToken(token_Schema);
      return res.status(Success).json({ token: token, status: Success });
    } catch (err) {
      return res.status(Bad).json({ message: err.message, status: Bad });
    }
  },
  Login_User: async (req, res) => {
    try {
      const response = await Login({ email: req.body.email });

      if (response.rows.length) {
        bcrypt.compare(req.body.password, response.rows[0].password, (err, result) => {
          if (err) {
            console.error("Error comparing passwords:", err);
          } else if (result === true) {
            let token_Schema = {
              id: response.rows[0].id,
              name: response.rows[0].name,
            };
            let token = genrateToken(token_Schema, req.body.remember);
            return res.status(Success).json({ token: token, status: Success });
          } else {
            res.status(Bad).json({ message: InvalidPassword, status: Bad });
          }
        });
      } else {
        res.status(Bad).json({ message: UserNotFound, status: Bad });
      }
    } catch (err) {
      return res.status(Bad).json({ message: err.message, status: Bad });
    }
  },
};
