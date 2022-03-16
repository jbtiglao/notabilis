// Required dependencies
const fs = require('fs');

module.exports = fuction(app) {

    // GET /api/notes - reads the db.json file, returns all saved notes as JSON
    app.get('/api/notes', function(req, res) {
        fs.readFile('./db/db.json', (err, data) => {
            if (err) throw err;
            dbData = JSON.parse(data);
            res.send(dbData);
        });
    });

    // POST /api/notes - receives a new note to save on the request body,
    // add it to the db.json file, then return the new note to the client
    app.post('/api/notes', function(req, res) {
        const userNotes = req.body;

        fs.readFile('./db/db.json', (err, data) => {
            if (err) throw err;
            dbData = JSON.parse(data);
            dbData.push(userNotes);
            let number = 1;
            dbData.forEach((note, index) => {
                note.id = number;
                number++
                return dbData;
            });
            console.log(dbData);

            stringData = JSON.stringify(dbData);

            fs.writeFile('./db/db.json', stringData, (err, data) => {
                if (err) throw err;
            });
        });
        res.send('That is noteworthy!');
    });

    // DELETE /api/notes/:id - receives a query parameter containing the id of a note
    // to delete (Note: fid a way to give each note a uniqie id when it's saved).
    // To delete a note, read all notes from the db.json file, remove note with given id property, and then 
    //rewrite the notes to the db.json file
    app.delete('/api/notes/:id', function(req, res) {
        // Gets id number of note to delete
        const deleteNote = req.params.id;
        console.log(deleteNote);

        fs.readFile('./db/db.json', (err, data) => {
            if (err) throw err;

            // Comparing each note's id to delete note
            dbData = JSON.parse(data);
            for (let i = 0; i < dbData.length; i++) {
                if (dbData[i].id === Number(deleteNote)) {
                    dbData.splice([i], 1);
                }
            }
            console.log(dbData);
            stringData = JSON.stringify(dbData);

            fs.writeFile('./db/db.json', stringData, (err, data) => {
                if (err) throw err;
            });
        });
        // Express response.status no content
        res.status(204).send();
    });
};
