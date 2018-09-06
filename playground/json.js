//how to create JSON using object
var obj = {
    name: "Andrew"
};
var stringObj= JSON.stringify(obj);
console.log(typeof stringObj);
console.log(stringObj);

//when you have JSON string & and wanna back to an object - use JSON.parse()
var personString = '{"name":"Andrew","age":25}';
var person = JSON.parse(personString);
console.log(typeof person);
console.log(person);

//notes.json
const fs = require('fs');
var originalNote = {
    title: 'Some title',
    body: 'Some body'
};
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);


