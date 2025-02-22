const fs = require('fs');
const path = require('path');

const directoryPath = './Camera';

function renameFilesInDirectory(directory) {
    if (!fs.existsSync(directory)) {
        console.error(`Direktori tidak ditemukan: ${directory}`);
        return;
    }

    fs.readdir(directory, (err, files) => {
        if (err) {
            console.error('Error membaca direktori:', err);
            return;
        }

        let photoIndex = 54;

        files.filter(file => fs.statSync(path.join(directory, file)).isFile()).forEach((file) => {
            const fileExtension = path.extname(file);
            const newFileName = `foto ${photoIndex}${fileExtension}`;
            const oldFilePath = path.join(directory, file);
            const newFilePath = path.join(directory, newFileName);

            fs.rename(oldFilePath, newFilePath, (err) => {
                if (err) {
                    console.error(`Gagal mengganti nama file ${file}:`, err);
                } else {
                    console.log(`Berhasil mengganti nama file ${file} menjadi ${newFileName}`);
                }
            });

            photoIndex++;
        });
    });
}

renameFilesInDirectory(directoryPath);
