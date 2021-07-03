// a middleware is any coe that the request pass through before sending a reponse

const express = require('express')
const app = express()
const morgan = require('morgan');

app.listen(3000, ()=> {console.log('Server listening on 3000')});

// app.use((req, res, next) => {
//     console.log('New request made');
//     console.log('host : ', req.hostname)
//     console.log('path : ', req.path);
//     console.log('method : ', req.method)
//     next()
// })

app.use(morgan('dev'))

app.use((req, res, next) => {
    console.log('Next Middle ware')
    next()
})

app.get('/', (req, res) => {
    res.sendFile('./index.html', { root: __dirname} )
 });


app.get('/about', (req, res) => {
    res.send('<p>About Page</p>');
 });

 app.get('/about-us', (req, res) => {
    res.redirect('/about');
 });

app.use((req,res) => {
     res.status(404).sendFile('./404.html', { root: __dirname})
 })
 

 /// There are many third party middlewares namely 
 // logger(morgan), helmet (for using session cookies etc..)