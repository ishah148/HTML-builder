/* eslint-disable*/
const fs = require('fs');
const path = require('path');
const { stdout, stdin } = require('process');
const myPath = path.join(__dirname, 'text.txt');
const wrStream = fs.createWriteStream(myPath);

stdout.write('enter text, please! \n')

stdin.on('data', (data) => {
    if (data.toString().trim() === 'exit') {
        console.log('Done!')
        process.exit();
    }
    wrStream.write(data.toString());
});

process.on('SIGINT', () => {
    console.log('Done!')
    process.exit();
});


// При наличии каких-либо ошибок прошу связяться со мной telegram: @IgorTg123 discord: IgorShah(@ishah148)#3091