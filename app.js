console.log('Starting app.js');

//load-in module
//2 strs 1)file 2)data
const fs = require('fs');
//i wanna fetch fs module in fs file
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

//lowdash 1)you dont have to keep rewriting methods 2)well-tested, tried in production
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
