/* eslint-disable*/
const fs = require('fs/promises');
const path = require('path');

readFiles('03-files-in-folder/secret-folder/')
async function readFiles(folder) {
    const files = await fs.readdir(folder, { withFileTypes: true })
    for (file of files) {
        const size = (await fs.stat(folder + file.name)).size
        if (file.isFile()) {
            console.log(file.name.split('.')[0] + '\t-', path.extname(file.name) + '\t-', size)
        }
    }
    return files
}

// При наличии каких-либо ошибок прошу связяться со мной telegram: @IgorTg123 discord: IgorShah(@ishah148)#3091