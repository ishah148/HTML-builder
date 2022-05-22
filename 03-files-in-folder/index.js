/* eslint-disable*/
const fs = require('fs/promises');
const path = require('path');

readFiles()
async function readFiles() {
    const currentFolder = '03-files-in-folder/secret-folder/';
    const a1 = await fs.readdir(currentFolder, { withFileTypes: true })
    for (file of a1) {
        const size = (await fs.stat(currentFolder + file.name)).size/1000 + 'kB'
        if (file.isFile()) {
            console.log(file.name + '\t-', path.extname(file.name) + '\t-', size)
        }
    }
}
