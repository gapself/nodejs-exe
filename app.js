console.log('Starting app.js');

//load-in module
//2 strs 1)file 2)data
const fs = require('fs');
//i wanna fetch fs module in fs file
const os = require('os');
const notes = require('./notes.js');

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
