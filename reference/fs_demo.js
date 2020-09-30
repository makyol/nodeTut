const fs = require('fs')
const path = require('path')

// Create folder
// fs.mkdir(path.join(__dirname, 'test'), {}, err => {
//     if (err) throw err;
//     console.log('Folder created!');
// });

// Create and write to a file
// fs.writeFile(path.join(__dirname, 'test', 'hello.txt'), 'Hello World!', err => {
//     if (err) throw err;
//     console.log('File written to...');

//     // File append
//     fs.appendFile(path.join(__dirname, 'test', 'hello.txt'), '\nI love coding!', err => {
//         if (err) throw err;
//         console.log('File appended to...');

//         // Read a file
//         // export function readFile(path: PathLike | number, options: { encoding?: null; flag?: string; } | undefined | null, callback: (err: NodeJS.ErrnoException | null, data: Buffer) => void): void;
//         fs.readFile(path.join(__dirname, 'test', 'hello.txt'), 'utf8', (err, data) => {
//             if (err) throw err;
//             console.log("file data:\n", data);
//         })
//     })
// })

// Rename a file
fs.rename(path.join(__dirname, 'test', 'hello.txt'), path.join(__dirname, 'test', 'hello_world.txt'), err => {
    if (err) throw err;
    console.log('File renamed');
})
