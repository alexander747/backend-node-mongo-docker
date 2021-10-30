const moongose = require('mongoose')

moongose.connect('mongodb://mongo/mydatabase').then(db=>console.log("DB is connected  to ", db.connection.host)).catch(e=>console.log("Failed to connected to database mongo ",e))