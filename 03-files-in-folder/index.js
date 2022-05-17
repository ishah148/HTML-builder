/* eslint-disable*/
const fs = require('fs');
const path = require('path')
fs.readdir('03-files-in-folder/secret-folder',(err,data)=>{
    console.dir(data)
    console.log(path.extname(data[0]))
    console.log(fs.statSync('03-files-in-folder/secret-folder/' + data[0]).size)
    
})
