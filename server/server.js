const express = require("express");
const app = express();
const cors = require("cors");
const { rateLimit } = require("express-rate-limit");

const db = require("./config/db");
const PORT = process.env.PORT || 5000;

const AuthenticationRoutes = require("./routes/authentication.routes");
const FormRoutes = require("./routes/form.routes");
const { DOMAIN, DOMAIN_2 } = require("./utils/config");
console.log("DOMAIN:", DOMAIN);

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  limit: 20,
  standardHeaders: "draft-7",
  legacyHeaders: false,
});

app.use(limiter);

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());
app.use("/", AuthenticationRoutes);
app.use("/form", FormRoutes);

app.listen(PORT, async () => {
  console.log(`Listing to port ${PORT}`);
});
