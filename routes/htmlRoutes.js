// Required dependencies
import { join } from 'path';

export default function(app) {

    // Returns notes.html file
    app.get('/notes', function(req, res) {
        res,sendFile(join(__dirname, '../public/notes.html'));
    });

    app.get('/', function(req, res) {
        res.sendFile(join(__dirname, '../public/index.html'));
    });

    // Returns index.html file
    app.get('*', function(req, res) {
        res.sendFile(join(__dirname, '../public/index.html'));
    });
};
