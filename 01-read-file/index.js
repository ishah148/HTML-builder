
// fs.readFile(taskPath, 'utf-8', (err, data) => {
//     console.log(data);
// });
/* eslint-disable*/
const fs = require('fs');
const path = require('path')
const taskPath = path.join(__dirname,'text.txt')
const stream = fs.createReadStream(taskPath, 'utf-8');
let text = '';

stream.on('readable',()=>{
    text = stream.read()
    if(text!== null) console.log(text)
})

stream.on('end',()=>{
    console.log('')
})

stream.on('error',()=>{
    console.log('error')
})
// При наличии каких-либо ошибок прошу связяться со мной telegram: @IgorTg123 discord: IgorShah(@ishah148)#3091


