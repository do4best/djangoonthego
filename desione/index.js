import { router } from "./routers.js";
import express from "express";
let listener = express()
listener.use('/app',router)
listener.get('/:name/:id',(req,res)=>{
    res.send(`send with parameter ${req.params.id} and with a different name ${req.params.name}`)
})

listener.listen(3001)