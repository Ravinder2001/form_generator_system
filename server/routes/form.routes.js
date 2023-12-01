const express = require("express");
const authenticate = require("../helpers/JWT/authenticate");
const { Add_Form, Get_Form_List, Form_Search, Form_Details, Form_Delete } = require("../controllers/form.controller");
const { AddFormValidatios } = require("../helpers/Body_Validations/forms/validator");

const router = express.Router();

router.post("/add", authenticate, AddFormValidatios, Add_Form);
router.get("/getList", authenticate, Get_Form_List);
router.get("/form_search", authenticate, Form_Search);
router.get("/form_details/:form_id", Form_Details);
router.delete("/delete/:form_id", authenticate, Form_Delete);

module.exports = router;
