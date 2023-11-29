const { IsUserEmailExists } = require("../../models/authentication.model");
const { Bad, Success } = require("../../utils/constant");
const { UserExists } = require("../../utils/message");

module.exports = {
  isUserExist: async (req, res, next) => {
    try {
      let response = await IsUserEmailExists({ email: req.body.email });
      if (response.rows[0].count == 0) {
        return next();
      }
      res.status(Success).json({ message: UserExists, status: Success });
    } catch (err) {
      return res.status(Bad).json({ message: err.message, status: Bad });
    }
  },
};
