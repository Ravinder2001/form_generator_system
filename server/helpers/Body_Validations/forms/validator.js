const { Bad } = require("../../../utils/constant");
const { validate_form_body } = require("./validation");

module.exports = {
  AddFormValidatios: (req, res, next) => {
    const { error } = validate_form_body(req.body);
    if (error) return res.status(Bad).json({ message: error.details[0].message, status: Bad });
    return next();
  },
};
