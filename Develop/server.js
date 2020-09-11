const express = require("require");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/notes', function (req, res) {
    res.sendFile(path.join(__dirname, 'notes.html'));
  });


  app.listen(PORT, function () {
    console.log(`App listening on PORT: ${PORT}`);
  });