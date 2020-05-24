const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;

require('dotenv').config()

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

var routes = require("./routes/bookRoutes.js");
app.use(routes);

app.listen(PORT, function() {
  console.log(`🌎 ==> Server listening on port ${PORT}!`);
});
