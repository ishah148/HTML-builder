/* eslint-disable*/
const fs = require('fs/promises');
const path = require('path');
const firstPath = __dirname + '/files';
const secondPath = __dirname + '/files-copy';
(async () => {
    await fs.access(secondPath);
    await fs.rm(secondPath, { recursive: true });
    copyDir(firstPath, secondPath);
})().catch((error) => {
    if (error.code === 'ENOENT') {
        copyDir(firstPath, secondPath);
    }
});

copyDir(__dirname + '/files', __dirname + '/files-copy')
async function copyDir(firstPath, secondPath) {
    const copying = await fs.mkdir(secondPath, { recursive: true })
    const files = await readFiles(firstPath)
    for (let file of files) {
        fs.copyFile(firstPath + '/' + file.name, secondPath + '/' + file.name)
    }

}

async function readFiles(folder, show = false) {
    const files = await fs.readdir(folder, { withFileTypes: true })
    return files
}

// При наличии каких-либо ошибок прошу связяться со мной telegram: @IgorTg123 discord: IgorShah(@ishah148)#3091