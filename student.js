const fs = require('fs');

let rawdata = fs.readFileSync('student-2.json');
let student = JSON.parse(rawdata);
console.log(student);



fs.readFile('student-2.json',(err, data)=> { 
    if (err) {
        throw err;
    }
    let student=JSON.parse(data);
    console.log(student);
});
console.log('this is after the read call')

