const fs = require("fs");

const { v4: uuidv4 } = require('uuid');


module.exports = function(app){

    app.get("/api/notes", function(req, res) {
        
        console.log("\n\nExecuting GET notes request");

        // Read 'db.json' file 
        let notes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
        
        console.log("\nGET request - Returning notes data: " + JSON.stringify(notes));
        
        // Send read data to response of 'GET' request
        res.json(notes);
    });


app.post("/api/notes", (req, res) => {
    // Extracted new note from request body.  
    const newNotes = req.body;
        
    console.log("\n\nPOST request - New Note : " + JSON.stringify(newNotes));

    // Assigned unique id obtained from 'uuid' package
    newNotes.id = uuidv4();

    // Read data from 'db.json' file
    let notes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

    // Pushed new note in notes file 'db.json'
    notes.push(newNotes);

    // Written notes data to 'db.json' file
    fs.writeFileSync('./db/db.json', JSON.stringify(notes));
    
    console.log("\nSuccessfully added new note to 'db.json' file!");

    // Send response
    res.json(notes);
});


app.delete("/api/notes/:id", (req, res) => {

    // Fetched id to delete
    let noteID = req.params.id.toString();
    
    console.log(`\n\nDELETE note request for noteId: ${noteID}`);

    // Read data from 'db.json' file
    let notes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

    // filter data to get notes except the one to delete
    const filterData = data.filter( note => note.id.toString() !== noteID );

    // Write new data to 'db.json' file
    fs.writeFileSync('./db/db.json', JSON.stringify(filterData));
    
    console.log(`\nSuccessfully deleted note with id : ${noteID}`);

    response.json(filterData);
});

};