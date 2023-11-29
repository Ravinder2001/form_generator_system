const Joi = require("joi");

const validator = (schema) => (payload) => {
  return schema.validate(payload, { abortEarly: false });
};

const register_user = Joi.object({
  name: Joi.string().min(1).max(20).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(20).required(),
});
const login_user = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(20).required(),
  remember: Joi.boolean().required(),
});

exports.validate_register_user = validator(register_user);
exports.validate_login_user= validator(login_user);
