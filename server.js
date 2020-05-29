const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 3001;

require('dotenv').config()

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(express.urlencoded());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {
  useNewUrlParser: true,
  useFindAndModify: false
})
.then(()=> console.log('Mongoose has sucessfully connected!'))
.catch((err)=> console.log('There was an issue connecting to Mongo'));

var routes = require("./routes/bookRoutes.js");
app.use(routes);

app.listen(PORT, function() {
  console.log(`Server listening on port ${PORT}!`);
});