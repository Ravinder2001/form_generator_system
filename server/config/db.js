const { Client, Pool } = require("pg");
const { HOST, USER, PORT, PASSWORD, DATABASE, POSTGRES_URL, NODE_ENV } = require("../utils/config");

if (NODE_ENV === "PROD") {
  const client = new Pool({
    connectionString: POSTGRES_URL,
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
} else {
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
}
