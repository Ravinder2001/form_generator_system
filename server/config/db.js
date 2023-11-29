const { Client } = require("pg");
const { HOST, USER, PORT, PASSWORD, DATABASE } = require("../utils/config");

const client = new Client({
  host: HOST,
  user: USER,
  port: PORT,
  password: PASSWORD,
  database: DATABASE,
});

client.on("error", (err) => {
  // Handle the error
  console.error("PostgreSQL client error:", err);
});

client
  .connect()
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    // Connection error
    console.error("PostgreSQL connection error:", err);
  });

module.exports = client;
