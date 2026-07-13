import http from 'http';
import os from 'os'
import express from'express'
const app = express();
app.use(express.json())
app.post('/',(req,res)=>{
    const {name} = req.body;
    res.status(200)
    res.get(`Hello Friend ${name}`)})
app.listen(8100,(error)=>{
    if(!error){console.log("Server is running")}
else{
    console.log("Server is not running")
}})