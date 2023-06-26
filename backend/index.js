
global.CONFIG= require('./confige/confige')
const cors = require('cors');
const express = require('express');
const app = express();
const routes = require('./routes/index')
const bodyParser = require('body-parser')

const port = 5020;
app.listen(port, function(err){
    if(!err) {console.log("Server is Running on "+port)
}    
})
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors());
app.use(routes);


module.exports = app;