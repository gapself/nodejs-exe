console.log('Starting app.js');

//load-in module
//2 strs 1)file 2)data
const fs = require('fs');
//i wanna fetch fs module in fs file
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

//dynami user input=makes useful scripts; node apps get input from the user in a lot of different ways
//i can use command line arguments to pass data into my app inside of the app
//how to get users input?
//node app.js list - access to "list" command
//console.log(process.argv); - argv- argument array; grab any information and make sth with it according to command used by the user
var command = process.argv[2]; //command : any command we wanna use like "list"
console.log('Command:',command);
//node app.js remove --title='secrets' --> !! windows, use single quotes
console.log(process.argv);

if (command === 'add') {
    console.log('Adding new note');
} else if (command === 'list') {
    console.log('Listing all notes');
} else if (command === 'read'){
    console.log('Reading note');
} else if (command === 'remove'){
    console.log("Removing note")
} else {
    console.log('Command not recognized');
}


//npm install nodemon -g
//nodemon app.js
//ctrl+c => terminate
//NPM/nodemon - responsible for watching out for changes & restarting the app when changes occur
var filteredArray = _.uniq(['Andrew'])
console.log(filteredArray); //[ 'Andrew', 1, 2, 3, 4 ]

//npm install lodash save
//lodash 1)you dont have to keep rewriting methods 2)well-tested, tried in production
//_.isString
console.log(_.isString(true)); //==> false-> (cause boolean's not a string
console.log(_.isString('Andrew')); //true comes up cause Andrew is str

//_.uniq
var filteredArray = _.uniq(['Andrew',1,'Andrew',1,2,3,4])
console.log(filteredArray); //[ 'Andrew', 1, 2, 3, 4 ]

//1st version
var res = notes.add(1,2);
console.log(res);
//2st version
console.log('Result:', notes.add(2,7));

//import notes
var res = notes.addNote();
console.log(res);

//user,age greeting.txt
var user = os.userInfo();
console.log(user);
fs.appendFile('greeting.txt',`Hello world and ${user.username}! You are ${notes.age}.`);
