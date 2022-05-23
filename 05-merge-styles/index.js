/* eslint-disable*/
// const { create } = require('domain');
const fs = require('fs/promises');
const path = require('path');

createBundle(__dirname + '/' + 'styles')
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


