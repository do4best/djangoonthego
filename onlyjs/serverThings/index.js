const http = require('http')
const server = http.createServer(async(req,res)=>{
    if(req.method === "GET" && req.url === '/my.html'){
        res.statusCode = 200;
        res.end();

    }
})
server.listen(3001,()=>{
    console.log(`Server is listning on http://localhost:3001`)
})