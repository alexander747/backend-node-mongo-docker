const express = require('express')
const cors = require('cors');
const morgan = require('morgan')
require('dotenv').config();


const app = express()

//configurar cors
app.use( cors() );

//lectura y parseo del body
app.use( express.json({limit: '1000mb' }) );

app.use(morgan('dev'));


app.listen(3000)
require('./database')
app.use(require('./routes/index'))

console.log("server listening on port 3000");