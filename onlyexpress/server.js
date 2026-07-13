
let express = require('express');
let app = express();
let app1 = require('./app.js')
app.use('/',app1)
app.post('/',function(req,res){
    res.send("Nice to meet you")
})

app.listen(3000)