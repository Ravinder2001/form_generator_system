const jwt = require("jsonwebtoken");
const { SECRET_KEY, TOKEN_EXPIRED_DURATION, CUSTOM_TOKEN_EXPIRED_DURATION } = require("../../utils/config");
const genrateToken = (data, remember) => {
  let token = jwt.sign(data, SECRET_KEY, {
    expiresIn: remember ? CUSTOM_TOKEN_EXPIRED_DURATION : TOKEN_EXPIRED_DURATION,
  });
  return token;
};

module.exports = genrateToken;
