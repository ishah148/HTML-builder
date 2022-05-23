/* eslint-disable*/
const fs = require('fs/promises');
const path = require('path');

copyDir(__dirname + '/files',__dirname + '/files-copy')
async function copyDir(firstPath, secondPath) {
    const copying = await fs.mkdir(secondPath, { recursive: true })
    const files = await readFiles(firstPath)
    for(let file of files){
        fs.copyFile(firstPath + '/' + file.name, secondPath + '/' + file.name) 
    }
}

async function readFiles(folder,show = false) {
    const files = await fs.readdir(folder, { withFileTypes: true })
    return files
}
