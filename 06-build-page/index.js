/* eslint-disable*/
const fs = require('fs/promises');
const path = require('path');
fs.mkdir(__dirname + '/project-dist', { recursive: true })
createBundle(__dirname + '/' + 'styles')
editHtml(__dirname)
copyAssets(__dirname + '/assets/')

async function editHtml(fd) {
    let template = await fs.readFile(fd + '/template.html', 'utf-8')
    const files = await fs.readdir(fd + '/components/', { withFileTypes: true })
    for(let file of files){
        const fileName = file.name.split('.')[0]
        const elem =  await fs.readFile(fd + `/components/${fileName}.html`, 'utf-8')
        const reg = new RegExp(`{{${fileName}}}`)
        template = template.replace(reg, elem)
    }
    await fs.writeFile(__dirname + '/project-dist/index.html', template)
    console.log('html built !')
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
    console.log('bundle created !')
}

async function copyAssets(fd) {
    const folders = ['fonts/', 'img/', 'svg/']
    for (let folder of folders) {
        await fs.mkdir(__dirname + '/project-dist/assets/' + folder, { recursive: true })
        const files = await fs.readdir(fd + folder, { withFileTypes: true })
        for (let file of files) {
            await fs.copyFile(fd + '/' + folder + '/' + file.name, __dirname + '/project-dist/assets/' + folder + '/' + file.name)
        }
    }
    console.log('assets copied !')
}
