/* eslint-disable*/
const fs = require('fs');
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });
rl.question('Please, input text? ', (answer) => {
    fs.writeFile('02-write-file/text.txt', answer, (err, data) => {
        if(err){
            console.log(err)
        }
    });
    console.log(`Thank you for your valuable feedback: ${answer}`);
    rl.close();
});
// При наличии каких-либо ошибок прошу связяться со мной telegram: @IgorTg123 discord: IgorShah(@ishah148)#3091