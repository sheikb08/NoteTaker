//Requiring web application framework that provides application functionality.
const express = require("express");
const app = express();

//Telling script to use whatever port is available or 8080
const PORT = process.env.PORT || 8080;

//Telling Express how to handle data parsing
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Referencing customer routes
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

//Starts server
app.listen(PORT, function () {
    console.log(`App listening on PORT: ${PORT}`);
  });
