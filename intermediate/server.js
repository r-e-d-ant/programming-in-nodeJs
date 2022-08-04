
const http = require('http');

const server = http.createServer(() => {
    console.log('request made');
});

server.listen(3000, 'localhost', () => {
    console.log('listening for request on 3000')
});