
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    /*
    // set header content type
    res.setHeader('Content-Type', 'Text/plain');
    res.write('hello, Mugisha');
    */

    /*
    // set header content type
    res.setHeader('Content-Type', 'Text/html');
    res.write('<h1>hello, Mugisha Thierry</h1>');
    res.write('<h1>hello again, Mugisha Thierry</h1>');
    */
   
    // set header content type
    res.setHeader('Content-Type', 'Text/html');

    let path = './views/';
    switch (req.url) {
        case '/':
            path += 'index.html';
            break;
        case '/about':
            path += 'about.html';
            break;
        default:
            path += '404.html';
            break;
    }


    // sent an html file
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            // res.write(data);
            res.end(data);
        }
    })
});

server.listen(3000, 'localhost', () => {
    console.log('listening for request on 3000')
});