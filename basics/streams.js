
const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./docs/blog4.txt');

// Buffer: smaller chunks of data

// readStream.on('data', (chunk) => {
//     console.log('----- NEW CHUNK ------');
//     console.log(chunk);
//     writeStream.write('\nNEW CHUNK\n');
//     writeStream.write(chunk);
// })

// easier way

// Pipe: by passing data directly from readable to writable stream

// piping
readStream.pipe(writeStream); // everytime it get the chunk it piping that into write stream
