const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../../utils/config");
const { UnauthorizedMsg, TokenMissing, sessionExp, JWTExpired } = require("../../utils/message");
const { Unauthorized } = require("../../utils/constant");
const { GetUserById } = require("../../models/authentication.model");
const authenticate = async (req, res, next) => {
  try {
    let token = req.headers.authorization;
    if (token) {
      token = token.split(" ")[1];
      const decode = jwt.verify(token, SECRET_KEY);
      if (decode != null) {
        const user = await GetUserById({ id: decode.id });
        if (user.rows.length) {
          req.customData = user.rows[0].id;
          return next();
        }
        return res.status(Unauthorized).json({ message: UnauthorizedMsg, status: Unauthorized });
      }
    } else {
      return res.status(Unauthorized).json({ message: TokenMissing, status: Unauthorized });
    }
  } catch (err) {
    return res.status(Unauthorized).json({
      message: err.message == JWTExpired ? sessionExp : err.message,
      status: Unauthorized,
    });
  }
};
module.exports = authenticate;
