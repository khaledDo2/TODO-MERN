const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
let mongoose = require("mongoose");

const app = express();

var corsOptions = {
  origin: "http://localhost:8000",
};
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//connect to mongoose
const dbPath = "mongodb://localhost/todo";
const options = { useNewUrlParser: true, useUnifiedTopology: true };
const mongo = mongoose.connect(dbPath, options);
mongo.then(
  () => {
    console.log("connected");
  },
  (error) => {
    console.log(error, "error");
  }
);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to TODO application." });
});

// All Routes
require("./routes/user.router")(app);
require("./routes/todo.router")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
