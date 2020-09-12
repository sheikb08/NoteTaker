const express = require("express");


const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/notes', function (req, res) {
    res.sendFile(path.join(__dirname, './public/notes.html'));
  });

  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './public/index.html'));
  });


  app.listen(PORT, function () {
    console.log(`App listening on PORT: ${PORT}`);
  });