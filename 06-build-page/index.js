/* eslint-disable*/
const fs = require('fs/promises');
const path = require('path');
console.log(__dirname)
fs.mkdir(__dirname + '/project-dist', { recursive: true })
// copyDir(__dirname + '/assets', __dirname + '/project-dist')


// createBundle(__dirname + '/' + 'styles')
async function createBundle(folder) {
    const files = await fs.readdir(folder, { withFileTypes: true })
    fs.writeFile(__dirname + '/project-dist/bundle.css', '')
    for (file of files) {
        if (file.isFile() && path.extname(file.name) === '.css') {
            const content = await fs.readFile(folder + '/' + file.name, 'utf-8')
            fs.appendFile(__dirname + '/project-dist/bundle.css', content + '\n\n')
        }
    }
}


// copyDir(__dirname + '/files',__dirname + '/files-copy')
async function copyDir(firstPath, secondPath) {
    const copying = await fs.mkdir(secondPath, { recursive: true })
    const files = await readFiles(firstPath)
    for(let file of files){
        fs.copyFile(firstPath + '/' + file.name, secondPath + '/' + file.name) 
    }

}

// async function readFiles(folder,show = false) {
//     const files = await fs.readdir(folder, { withFileTypes: true })
//     return files
// }
copyAssets(__dirname + '/assets/')
async function copyAssets(fd) {
    const folders = ['fonts/','img/','svg/']
    for(let folder of folders){
        fs.mkdir(__dirname + '/project-dist/' + folder, { recursive: true })
        const files = await fs.readdir(fd + folder, { withFileTypes: true })
        for (let file of files) {
            fs.copyFile(fd + '/' + folder + '/' + file.name, __dirname + '/project-dist/' + folder + '/' + file.name) 
            if (file.isFile()) {   
            }
        }
    }
    return new Promise(resolve =>{
        resolve('finish')
    })
}