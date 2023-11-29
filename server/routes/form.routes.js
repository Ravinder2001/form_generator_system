const express = require("express");
const authenticate = require("../helpers/JWT/authenticate");
const { AddFormValidatios } = require("../helpers/Body_Validations/Form/validator");
const { Add_Form, Get_Form_List } = require("../controllers/form.controller");
const router = express.Router();

router.post("/add", authenticate, AddFormValidatios, Add_Form);
router.get("/getList", authenticate, Get_Form_List);

module.exports = router;
