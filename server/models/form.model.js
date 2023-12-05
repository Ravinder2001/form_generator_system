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
    form_valid_from,
    form_valid_upto,
  }) => {
    return new Promise(function (resolve, reject) {
      try {
        const response = client.query(
          `INSERT INTO form_list (id,form_type,form_no,movement_type,owner_name,firm_name,lease_address,
          seller_reg_no,seller_gst,seller_address,mineral_name,weight,sale_value,gst_rate,payble_gst,purchase_status,
          purchase_reg_no,purchase_gst,destination_address,vehicle_type,vehicle_reg_no,driver_name,driver_no,
          travel_time,travel_distance,form_valid_from,form_valid_upto
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
            form_valid_from,
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

  FormSearch: ({ text, limit, offset }) => {
    return new Promise(function (resolve, reject) {
      try {
        const response = client.query(
          `SELECT *
          FROM form_list
          WHERE 
              (LOWER(id) LIKE LOWER($1) OR
              LOWER(form_type) LIKE LOWER($1) OR
              LOWER(form_no) LIKE LOWER($1) OR
              LOWER(movement_type) LIKE LOWER($1) OR
              LOWER(owner_name) LIKE LOWER($1) OR
              LOWER(firm_name) LIKE LOWER($1) OR
              LOWER(lease_address) LIKE LOWER($1) OR
              LOWER(seller_reg_no) LIKE LOWER($1) OR
              LOWER(seller_gst) LIKE LOWER($1) OR
              LOWER(seller_address) LIKE LOWER($1) OR
              LOWER(mineral_name) LIKE LOWER($1) OR
              LOWER(weight) LIKE LOWER($1) OR
              LOWER(sale_value) LIKE LOWER($1) OR
              LOWER(gst_rate) LIKE LOWER($1) OR
              LOWER(payble_gst) LIKE LOWER($1) OR
              LOWER(purchase_status) LIKE LOWER($1) OR
              LOWER(purchase_reg_no) LIKE LOWER($1) OR
              LOWER(purchase_gst) LIKE LOWER($1) OR
              LOWER(destination_address) LIKE LOWER($1) OR
              LOWER(vehicle_type) LIKE LOWER($1) OR
              LOWER(vehicle_reg_no) LIKE LOWER($1) OR
              LOWER(driver_name) LIKE LOWER($1) OR
              LOWER(driver_no) LIKE LOWER($1) OR
              LOWER(travel_time) LIKE LOWER($1) OR
              LOWER(travel_distance) LIKE LOWER($1) OR
              LOWER(form_valid_from) LIKE LOWER($1) OR
              LOWER(form_valid_upto) LIKE LOWER($1))
              AND status = true
          ORDER BY created_at DESC
          LIMIT $2
          OFFSET $3;
          `,
          [`%${text}%`, limit, offset]
        );
        resolve(response);
      } catch (err) {
        reject(err);
      }
    });
  },
  FormSearchCount: ({ text }) => {
    return new Promise(function (resolve, reject) {
      try {
        const response = client.query(
          `
        SELECT COUNT(*) AS total_count
        FROM form_list
        WHERE 
          (LOWER(id) LIKE LOWER($1) OR
          LOWER(form_type) LIKE LOWER($1) OR
          LOWER(form_no) LIKE LOWER($1) OR
          LOWER(movement_type) LIKE LOWER($1) OR
          LOWER(owner_name) LIKE LOWER($1) OR
          LOWER(firm_name) LIKE LOWER($1) OR
          LOWER(lease_address) LIKE LOWER($1) OR
          LOWER(seller_reg_no) LIKE LOWER($1) OR
          LOWER(seller_gst) LIKE LOWER($1) OR
          LOWER(seller_address) LIKE LOWER($1) OR
          LOWER(mineral_name) LIKE LOWER($1) OR
          LOWER(weight) LIKE LOWER($1) OR
          LOWER(sale_value) LIKE LOWER($1) OR
          LOWER(gst_rate) LIKE LOWER($1) OR
          LOWER(payble_gst) LIKE LOWER($1) OR
          LOWER(purchase_status) LIKE LOWER($1) OR
          LOWER(purchase_reg_no) LIKE LOWER($1) OR
          LOWER(purchase_gst) LIKE LOWER($1) OR
          LOWER(destination_address) LIKE LOWER($1) OR
          LOWER(vehicle_type) LIKE LOWER($1) OR
          LOWER(vehicle_reg_no) LIKE LOWER($1) OR
          LOWER(driver_name) LIKE LOWER($1) OR
          LOWER(driver_no) LIKE LOWER($1) OR
          LOWER(travel_time) LIKE LOWER($1) OR
          LOWER(travel_distance) LIKE LOWER($1) OR
          LOWER(form_valid_from) LIKE LOWER($1) OR
          LOWER(form_valid_upto) LIKE LOWER($1))
          AND status = true;
      `,
          [`%${text}%`]
        );
        resolve(response);
      } catch (err) {
        reject(err);
      }
    });
  },
  FormDetails: ({id}) => {
    return new Promise(function (resolve, reject) {
      try {
        const response = client.query(`SELECT * FROM form_list WHERE form_no=$1 AND status=true`,[id]);
        resolve(response);
      } catch (err) {
        reject(err);
      }
    });
  },
  FormDelete: ({id}) => {
    return new Promise(function (resolve, reject) {
      try {
        const response = client.query(`DELETE FROM form_list WHERE id=$1`,[id]);
        resolve(response);
      } catch (err) {
        reject(err);
      }
    });
  },
};
