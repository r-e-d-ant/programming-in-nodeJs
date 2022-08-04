
const fs = require('fs'); // fs stand for file system

// reading files

// fs.readFile('./docs/blog1.txt', (err, data) => { // this is an ansycronous, it take some time and it didn't block the code
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// console.log('last line');

// writing files

// fs.writeFile('./docs/blog1.txt', 'Hello, World!', () => {
//     console.log('file was written');
// });
// fs.writeFile('./docs/blog2.txt', 'Hello, Again!', () => {
//     console.log('file was written');
// });

// directories
if (!fs.existsSync('./assets')) {
    // mkdir to create a directory
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder created');
    });
} else {
    // rmdir to delete a directory
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder deleted');
    });
}

// deleting files
if (fs.existsSync('./docs/deleteme.txt')) {
    // unlink to delete a file
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('file deletes');
    })
}