CREATE TABLE IF NOT EXISTS users (
  id VARCHAR(255) UNIQUE NOT NULL PRIMARY KEY,
  name TEXT NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status BOOLEAN NOT NULL DEFAULT true
);
CREATE TABLE IF NOT EXISTS form_list (
  id VARCHAR(255) UNIQUE NOT NULL PRIMARY KEY,
  form_type VARCHAR(255) NOT NULL,
  form_no VARCHAR(255) NOT NULL,
  movement_type VARCHAR(255) NOT NULL,
  owner_name VARCHAR(255) NOT NULL,
  firm_name VARCHAR(255) NOT NULL,
  lease_address VARCHAR(255) NOT NULL,
  seller_reg_no VARCHAR(255) NOT NULL,
  seller_gst VARCHAR(255) NOT NULL,
  seller_address VARCHAR(255) NOT NULL,
  mineral_name VARCHAR(255) NOT NULL,
  weight VARCHAR(255) NOT NULL,
  sale_value VARCHAR(255) NOT NULL,
  gst_rate VARCHAR(255) NOT NULL,
  payble_gst VARCHAR(255) NOT NULL,
  purchase_status VARCHAR(255) NOT NULL,
  purchase_reg_no VARCHAR(255) NOT NULL,
  purchase_gst VARCHAR(255) NOT NULL,
  destination_address VARCHAR(255) NOT NULL,
  vehicle_type VARCHAR(255) NOT NULL,
  vehicle_reg_no VARCHAR(255) NOT NULL,
  driver_name VARCHAR(255) NOT NULL,
  driver_no VARCHAR(255) NOT NULL,
  travel_time VARCHAR(255) NOT NULL,
  travel_distance VARCHAR(255) NOT NULL,
  form_valid_from VARCHAR(255) NOT NULL,
  form_valid_upto VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status BOOLEAN NOT NULL DEFAULT true
);
