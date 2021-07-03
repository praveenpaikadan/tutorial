const express       = require('express');
const mangoose      = require('mongoose');
const morgan        = require('morgan');
const bodyParser     = require('body-parser')

const EmployeeRoute = require('./routes/employee')
mangoose.connect('mongodb://localhost:27017/testdb', {useNewUrlParser: true, useUnifiedTopology : true})
const db = mangoose.connection

db.on('error', err => {
    console.log(err)
})

db.once('open', () => {
    console.log('Date base connection established ...' )
})

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true})) // to parse requests coming in encoded url form
app.use(bodyParser.json())  // to parse requests coming in json form

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server Running at ${PORT}`)
})

app.use('/api/employee', EmployeeRoute)

