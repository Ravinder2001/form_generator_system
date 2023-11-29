const client = require("../config/db");
module.exports = {
  AddForm: ({
    id,
    form_type,
    form_no,
    movement_type,
    owner_name,
    firm_name,
    lease_address,
    seller_reg_no,
    seller_gst,
    seller_address,
    mineral_name,
    weight,
    sale_value,
    gst_rate,
    payble_gst,
    purchase_status,
    purchase_reg_no,
    purchase_gst,
    destination_address,
    vehicle_type,
    vehicle_reg_no,
    driver_name,
    driver_no,
    travel_time,
    travel_distance,
    form_valid_form,
    form_valid_upto,
  }) => {
    return new Promise(function (resolve, reject) {
      try {
        const response = client.query(
          `INSERT INTO form_list (id,form_type,form_no,movement_type,owner_name,firm_name,lease_address,
          seller_reg_no,seller_gst,seller_address,mineral_name,weight,sale_value,gst_rate,payble_gst,purchase_status,
          purchase_reg_no,purchase_gst,destination_address,vehicle_type,vehicle_reg_no,driver_name,driver_no,
          travel_time,travel_distance,form_valid_form,form_valid_upto
        ) VALUES (
          $1, $2, $3, $4, $5, $6, $7, $8, $9, $10,
          $11, $12, $13, $14, $15, $16, $17, $18, $19, $20,
          $21, $22, $23, $24, $25, $26, $27
        );
        `,
          [
            id,
            form_type,
            form_no,
            movement_type,
            owner_name,
            firm_name,
            lease_address,
            seller_reg_no,
            seller_gst,
            seller_address,
            mineral_name,
            weight,
            sale_value,
            gst_rate,
            payble_gst,
            purchase_status,
            purchase_reg_no,
            purchase_gst,
            destination_address,
            vehicle_type,
            vehicle_reg_no,
            driver_name,
            driver_no,
            travel_time,
            travel_distance,
            form_valid_form,
            form_valid_upto,
          ]
        );
        resolve(response);
      } catch (err) {
        reject(err);
      }
    });
  },
  GetFormList: ({ limit, offset }) => {
    return new Promise(function (resolve, reject) {
      try {
        const response = client.query(
          `
        SELECT * FROM form_list WHERE status=true 
        ORDER BY created_at DESC LIMIT $1 OFFSET $2
        `,
          [limit, offset]
        );
        resolve(response);
      } catch (err) {
        reject(err);
      }
    });
  },
  GetListCount: () => {
    return new Promise(function (resolve, reject) {
      try {
        const response = client.query(`SELECT COUNT(id) FROM form_list WHERE status=true `);
        resolve(response);
      } catch (err) {
        reject(err);
      }
    });
  },
};
