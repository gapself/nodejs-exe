console.log('Starting notes.js');

const fs = require('fs');
//addNote function which's in app.js
//node app.js add --title=secrets --body="This is my secret"
var addNote = (title,body) => {
    var notes = [];
    var note = {
        title,
        body
    };
//  loop through all of the notes and check if there're any new notes, if there're duplicates we're not gonna call 2 lines: if there arent than;;; notes.push(), etc if we run file that exists - catch'll never work
// code that loads the file
    try {
        var notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
    } catch (e) {
    }
//return true-keep that array inside
// code that saves the file
    var duplicatesNotes = notes.filter((note) => note.title === title); //return note.title...
    if (duplicatesNotes.length === 0 ) {
        notes.push(note);  //if re = to 0 then we wanna push notes
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
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
