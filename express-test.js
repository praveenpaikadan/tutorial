 const express = require('express');
 

 // express app
 // In express we dont want to manually set response codes or content type

 const app = express();

 app.listen(3000);

 app.get('/', (req, res) => {
    // res.send('<p>Home Page</p>');
    // by default express take the path argument as absolute path.
    // so a decond argument { root : __dirname } should be added
    res.sendFile('./index.html', { root: __dirname} )
 });

 app.get('/about', (req, res) => {
    res.send('<p>About Page</p>');
 });

 app.get('/about-us', (req, res) => {
    res.redirect('/about');
 });

 // this app.use method will always fire while a request is made but only if the 
 // code execution reachea this point. If the url matches in any of the 
 // above routes. lways keep it last
 app.use((req,res) => {
     res.sendFile('./404.html', { root: __dirname})
 })
 