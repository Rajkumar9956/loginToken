const mongoose = require('mongoose')

const DB = 'mongodb://localhost:27017/hariom'
mongoose.connect(DB, {
    useNewUrlParser: true,
     useUnifiedTopology: true,
}).then(() =>{
    console.log('Database connected..')
})