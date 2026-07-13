import express from 'express'

let router = express.Router();

router.get('/',(req,res)=>{
    res.send("<h1>Hello Friend</h1>")

})
router.post("/hello",(req,res)=>{
    res.send("Call the post method with router")
});
export {router}