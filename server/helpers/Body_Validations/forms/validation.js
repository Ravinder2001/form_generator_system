const Joi = require("joi");

const validator = (schema) => (payload) => {
  return schema.validate(payload, { abortEarly: false });
};

const form_body = Joi.object({
  form_type: Joi.string().max(255).required(),
  form_no: Joi.string().max(255).required(),
  movement_type: Joi.string().max(255).required(),
  owner_name: Joi.string().max(255).required(),
  firm_name: Joi.string().max(255).required(),
  lease_address: Joi.string().max(255).required(),
  seller_reg_no: Joi.string().max(255).required(),
  seller_gst: Joi.string().max(255).required(),
  seller_address: Joi.string().max(255).required(),
  mineral_name: Joi.string().max(255).required(),
  weight: Joi.string().max(255).required(),
  sale_value: Joi.string().max(255).required(),
  gst_rate: Joi.string().max(255).required(),
  payble_gst: Joi.string().max(255).required(),
  purchase_status: Joi.string().max(255).required(),
  purchase_reg_no: Joi.string().max(255).required(),
  purchase_gst: Joi.string().max(255).required(),
  destination_address: Joi.string().max(255).required(),
  vehicle_type: Joi.string().max(255).required(),
  vehicle_reg_no: Joi.string().max(255).required(),
  driver_name: Joi.string().max(255).required(),
  driver_no: Joi.string().max(255).required(),
  travel_time: Joi.string().max(255).required(),
  travel_distance: Joi.string().max(255).required(),
  form_valid_from: Joi.number().required(),
  form_valid_upto: Joi.number().required(),
});

exports.validate_form_body = validator(form_body);
