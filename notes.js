console.log('Starting notes.js');

//addNote function which's in app.js
//node app.js add --title=secrets --body="This is my secret"
var addNote = (title,body) => {
    console.log('Adding note',title,body);
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
