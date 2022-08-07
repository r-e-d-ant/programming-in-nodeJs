
const http = require('http');
const fs = require('fs');
const _ = require('lodash')

const server = http.createServer((req, res) => {
    // lodash

    // random number
    const num = _.random(0, 20);
    console.log(num);

    // run a function once
    const greet = _.once(() => {
        console.log('hello');
    });

    greet();
    greet();

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
            // if everything is ok
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            // if everything is ok
            res.statusCode = 200;
            break;
        case '/about-me':
            // redirection code
            res.statusCode = 301;
            // redirect
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += '404.html';
            // if it is not ok
            res.statusCode = 404;
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