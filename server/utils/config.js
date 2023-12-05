const dotenv = require("dotenv");
dotenv.config();

const HOST = process.env.HOST;
const USER = process.env.USER;
const PORT = process.env.DB_PORT;
const PASSWORD = process.env.PASSWORD;
const DATABASE = process.env.DATABASE;
const SECRET_KEY = process.env.SECRET_KEY;
const TOKEN_EXPIRED_DURATION = process.env.TOKEN_EXPIRED_DURATION;
const CUSTOM_TOKEN_EXPIRED_DURATION = process.env.CUSTOM_TOKEN_EXPIRED_DURATION;
const DOMAIN = process.env.DOMAIN;
const DOMAIN_2 = process.env.DOMAIN_2;
const POSTGRES_URL = process.env.POSTGRES_URL;
const NODE_ENV = process.env.NODE_ENV;

module.exports = {
  HOST,
  USER,
  PORT,
  PASSWORD,
  DATABASE,
  SECRET_KEY,
  TOKEN_EXPIRED_DURATION,
  DOMAIN,
  CUSTOM_TOKEN_EXPIRED_DURATION,
  POSTGRES_URL,NODE_ENV,DOMAIN_2
};
