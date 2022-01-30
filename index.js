const dotenv = require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const esgRoute = require("./routes/esgs");

const app = express();

//CORS
app.use(cors({ credentials: true, origin: true }));

app.use(express.json());
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.json({ status: "API is running" });
});
app.use("/api/v1.0/esg/companies", esgRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:5000`);
});
