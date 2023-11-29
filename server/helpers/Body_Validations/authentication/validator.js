const { Bad } = require("../../../utils/constant");
const { validate_register_user, validate_login_user } = require("./validation");

module.exports = {
  RegisterUserValidations: (req, res, next) => {
    const { error } = validate_register_user(req.body);
    if (error) return res.status(Bad).json({ message: error.details[0].message, status: Bad });
    return next();
  },
  LoginUserValidations: (req, res, next) => {
    const { error } = validate_login_user(req.body);
    if (error) return res.status(Bad).json({ message: error.details[0].message, status: Bad });
    return next();
  },
};
