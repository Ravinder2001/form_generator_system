const express = require("express");
const app = express();
const cors = require("cors");

const db = require("./config/db");
const PORT = process.env.PORT || 5000;

const AuthenticationRoutes = require("./routes/authentication.routes");
const { DOMAIN } = require("./utils/config");

app.use(
  cors({
    origin: [DOMAIN],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());

app.use("/", AuthenticationRoutes);

app.listen(PORT, async () => {
  console.log(`Listing to port ${PORT}`);
});
