const express = require("express");
const { Register_User, Login_User } = require("../controllers/authentication.controller");
const { RegisterUserValidations, LoginUserValidations } = require("../helpers/Body_Validations/authentication/validator");
const { isUserExist } = require("../helpers/DB_Validations/DB_Validations");
const router = express.Router();

// router.post("/register", RegisterUserValidations, isUserExist, Register_User);
router.post("/login", LoginUserValidations, Login_User);

module.exports = router;
