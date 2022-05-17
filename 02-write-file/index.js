/* eslint-disable*/
const fs = require('fs');
// fs.writeFile('02-write-file/text.txt', '123123123\n', (err, data) => {
//     debugger
//     if(err){
//         console.log(err)
//     }
// });
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });
rl.question('What do you think of Node.js? ', (answer) => {
    fs.writeFile('02-write-file/text.txt', answer, (err, data) => {
        if(err){
            console.log(err)
        }
    });
    console.log(`Thank you for your valuable feedback: ${answer}`);
    rl.close();
});