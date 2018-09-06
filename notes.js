console.log('Starting notes.js');

const fs = require('fs');
//function that'll fetch notes from the file system
var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

//addNote function which's in app.js
//node app.js add --title=secrets --body="This is my secret"
var addNote = (title,body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };

    var duplicatesNotes = notes.filter((note) => note.title === title); //return note.title...

    if (duplicatesNotes.length === 0 ) {
        notes.push(note);  //if re = to 0 then we wanna push notes
        saveNotes(notes);
        return note;
    }
};
var getAll = () => {
    console.log('Getting all notes');
};
var getNote = (title) => {
    console.log('Getting note', title) ;
};
var removeNote = (title) => {
    console.log('Removing title',title);
};
//no need getAll:getAll
module.exports={
    addNote,
    getAll,
    getNote,
    removeNote,
};

//add
module.exports.add = (a,b) => {
    return a+b;
};

//addnotes
module.exports.addNote = () => {
    console.log('addNote');
    return 'New note';
};
module.exports.age=22;
