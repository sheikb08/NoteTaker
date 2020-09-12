const fs = require("fs");


module.exports = function(app){


app.get('api/notes', function(req, res){
    let notes = JSON.parse(fs.readFileSync(".db/db.json", "utf8"));
    res.json(notes);
});

app.post('api/notes', function(req, res){
    const newNotes = req.body;
    let notes = JSON.parse(fs.writeFileSync(".db/db.json", "utf8"));
    console.log(newNotes);
    notes.push(newNotes);
    res.json(notes);
});


}