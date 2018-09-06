console.log('Starting app.js');

//load-in module
//2 strs 1)file 2)data
const fs = require('fs');
//i wanna fetch fs module in fs file
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');
const yargs =require('yargs');

//parsing - pain in my butt!! so use YARGS :D
// npm install yargs@4.1.1..--save => why --save?=> without it yarg'll be installed into the node modules folder , but if we wipe(clean) that node modules later and run npm install - yargs wont get reinstalled
const argv = yargs.argv;
//var command = argv._[0];

//dynami user input=makes useful scripts; node apps get input from the user in a lot of different ways
//i can use command line arguments to pass data into my app inside of the app
//how to get users input?
//node app.js list - access to "list" command
//console.log(process.argv); - argv- argument array; grab any information and make sth with it according to command used by the user
var command = process.argv[2]; //command : any command we wanna use like "list"
console.log('Command:',command);
//node app.js remove --title='secrets' --> !! windows, use single quotes => it prents value&key

//1)process,2)yargs; 1)node app.js add 2) node app.js encrypted; 1) add, 2)encrypted
console.log('Process',process.argv);
console.log('Yargs',argv);

if (command === 'add') {
//    notes.addNote(argv.title,argv.body);
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('Note created');
        console.log('--');
        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`);
    } else {
        console.log('Note title taken');
    }
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read'){
    console.log('Reading note');
    notes.getNote(argv.title);
} else if (command === 'remove'){
    console.log("Removing note");
    notes.removeNote(argv.title);
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