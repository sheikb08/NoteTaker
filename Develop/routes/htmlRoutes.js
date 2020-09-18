//Allows me to declare routes
const path = require("path");

module.exports = function(app){

  //Setting path for notes.
app.get('/notes', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });
  
  //Set path for homepage
    app.get('/', function (req, res) {
      res.sendFile(path.join(__dirname, './public/index.html'));
    });
  

}