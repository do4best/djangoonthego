import express,{Router} from 'express'

const app = express()
const router = Router()
app.get('/',(req,res)=>(
    res.send("Hello Friend")
))
export {app}