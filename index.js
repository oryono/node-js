const Joi = require("joi");
const config = require("config");
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express();
const routes = require("./routes");
app.use(morgan("combined"));
app.use(express.json());

mongoose
  .connect(
    `mongodb://localhost:${config.get("dbConfig.port")}/${config.get(
      "dbConfig.dbName"
    )}`,
    { useNewUrlParser: true }
  )
  .then(res => {
    console.log("Connected succesfully");
  });

app.use("/api", routes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
