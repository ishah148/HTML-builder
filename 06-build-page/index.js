/* eslint-disable*/
const { rmSync } = require('fs');
const fs = require('fs/promises');
const path = require('path');
const { formatWithOptions } = require('util');
console.log(__dirname)
fs.mkdir(__dirname + '/project-dist', { recursive: true })
createBundle(__dirname + '/' + 'styles')
editHtml(__dirname)
copyAssets(__dirname + '/assets/')


async function editHtml(fd){
    const template  = await fs.readFile(fd +'/template.html','utf-8')
    const header  = await fs.readFile(fd +'/components/header.html','utf-8')
    const articles  = await fs.readFile(fd +'/components/articles.html','utf-8')
    const footer =  await fs.readFile(fd +'/components/footer.html','utf-8')
    let result = template.replace(/{{header}}/,header)
    result = result.replace(/{{articles}}/,articles)
    result = result.replace(/{{footer}}/,footer)
    await fs.writeFile(__dirname + '/project-dist/index.html',result)
    console.log('html done!')
}

async function createBundle(folder) {
    const files = await fs.readdir(folder, { withFileTypes: true })
    fs.writeFile(__dirname + '/project-dist/style.css', '')
    for (file of files) {
        if (file.isFile() && path.extname(file.name) === '.css') {
            const content = await fs.readFile(folder + '/' + file.name, 'utf-8')
            fs.appendFile(__dirname + '/project-dist/style.css', content + '\n\n')
        }
    }
    console.log('bundle created')
}

async function copyAssets(fd) {
    const folders = ['fonts/','img/','svg/']
    for(let folder of folders){
       await fs.mkdir(__dirname + '/project-dist/assets/' + folder, { recursive: true })
        const files = await fs.readdir(fd + folder, { withFileTypes: true })
        for (let file of files) {
            await fs.copyFile(fd + '/' + folder + '/' + file.name, __dirname + '/project-dist/assets/' + folder + '/' + file.name) 
        }
    }
    console.log('assets copied')
}
