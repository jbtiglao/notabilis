import { promisify } from 'util';
import { readFile, writeFile } from 'fs';
import { v4 as uuid } from 'uuid';

const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);

class Store {
    read() {
        return readFileAsync('db/db.json', 'utf8')
        }
        write(note) {
            return writeFileAsync('db/db.json', JSON.stringify(note))
        }

        async addNote(note) {
            const {
                title,
                text
            } = note
            if (!title || !text) {
                throw new Error('title and text cannot be blank')
            }

            const newNote = {
                title,
                text,
                id: uuid()
            }

            const notes = await this.getNotes();
            const updatedNotes = [...notes, newNote];
            await this.write(updatedNotes);
            return this.newNote;
        }

        async getNotes() {
            const notes = await this.read();
            return JSON.parse(notes) || [];
        }
    }

    removeNote(id) {
        return this.getNotes()
        .then(notes => notes.filter(note => note.id !== id))
        .then(keptNotes => this.write(keptNotes))
    }
}


export default new Store();