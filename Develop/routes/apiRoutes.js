//Requiring Read/Write abilitites
const fs = require("fs");
//This will appoint each note to a unique ID
const { v4: uuidv4 } = require('uuid');


module.exports = function(app){

    //Retrieve information from JSON when route is activated
    app.get("/api/notes", function(req, res) {
     
        // Read 'db.json' file 
        let notes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
        
        console.log("\nHere is your data from the JSON file: " + JSON.stringify(notes));
        
        // Responding to the request with the data
        res.json(notes);
    });


app.post("/api/notes", function (req, res) {
    // Pulling new note from information provided by user within the body.  
    const newNotes = req.body;
    JSON.stringify(newNotes);

    // Assigning a unique id to the new note via 'uuid'.
    newNotes.id = uuidv4();

    // Read data from JSON file
    let notes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

    // Pushing a new note into the 'db.json' file.
    notes.push(newNotes);

    // Write notes to data 'db.json' file
    fs.writeFileSync('./db/db.json', JSON.stringify(notes));
    
    console.log("\nSuccessfully added new note to 'db.json' file!");

    // Send response
    res.json(notes);
});


app.delete("/api/notes/:id", function (req, res) {

    // Retrieving the ID of the selected note.
    let noteID = req.params.id;
    
    console.log(`${noteID} will be deleted`);

    // Read data from 'db.json' file
    let notes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

    //filter data and return all notes except the note staged for deletion.
    const filterData = notes.filter( note => note.id !== noteID );

    // Write new data to 'db.json' file
    fs.writeFileSync('./db/db.json', JSON.stringify(filterData));
    
    console.log(`\n ${noteID} has been deleted`);
    
    //Returning filtered data.
    res.json(filterData);
});

};
