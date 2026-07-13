let express1 = require('express').Router()
express1.get("/",function(req,res){
    res.send("This is app")
})

module.exports = express1