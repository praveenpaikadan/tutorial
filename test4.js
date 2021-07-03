const http = require('http');
const fs = require('fs');
const _ = require('lodash')

const server = http.createServer((req, res)=> {
    console.log(req.url, req.method);
    // set header an and content type
    res.setHeader('Contant-Type', 'text/html');
    // res.write('<h1>Hello, Mwona</h1>');
    // res.write('<p>Muthumany')
    // res.end()

    let path = "./";
    switch(req.url) {
        case ('/'):
            path += 'index.html';
            res.statusCode = 200;
            break;
        case('/home'):
            res.statusCode = 301;
            res.setHeader('Location', '/')
            res.end()
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    fs.readFile(path,(err, data) => {
        if (err) {
            console.log(err)
            res.end()
        }else{
            console.log('send path ' + path)
            // res.write(data)
            // res.end()
            res.end(data)
        }
    })


    
}) // the call back runs everytime a request comes in.

const PORT = 3000 // this port number is a convention used in web deveopment
server.listen(PORT, 'localhost', () => {
    console.log('listening for requests at' + PORT)
})